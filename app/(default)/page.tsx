"use client";

import { useMemo } from "react";

import {
  MapPin,
  Database,
  Globe,
  Building2,
  Satellite,
  Clock,
} from "lucide-react";

import { useData } from "@shared/hooks/data/useData";

import MapWrapper from "@/app/(default)/components/MapWrapper";
import StatCard from "@/app/(default)/components/StatCard";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@shared/components/ui/card";

const Home = () => {
  const { telemetryData, telemetryLoading, telemetryError } = useData();

  const stats = useMemo(() => {
    if (!telemetryData || telemetryData.length === 0) {
      return {
        totalRecords: 0,
        uniqueCities: 0,
        uniqueRoads: 0,
        avgSatellites: 0,
        latestRecord: null,
        cities: [] as string[],
      };
    }

    const cities = new Set<string>();
    const roads = new Set<string>();

    let totalSatellites = 0;
    let satelliteCount = 0;

    let latestDate: Date | null = null;

    telemetryData.forEach((item) => {
      if (item.address?.city) cities.add(item.address.city);
      if (item.address?.road) roads.add(item.address.road);
      if (item.location?.satellites) {
        totalSatellites += item.location.satellites;
        satelliteCount++;
      }
      if (item.location?.date_time) {
        const date = new Date(item.location.date_time);
        if (!latestDate || date > latestDate) {
          latestDate = date;
        }
      }
    });

    return {
      totalRecords: telemetryData.length,
      uniqueCities: cities.size,
      uniqueRoads: roads.size,
      avgSatellites:
        satelliteCount > 0 ? Math.round(totalSatellites / satelliteCount) : 0,
      latestRecord: latestDate,
      cities: Array.from(cities),
    };
  }, [telemetryData]);

  if (telemetryLoading) {
    return (
      <main className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black p-6">
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse text-lg text-muted-foreground">
            Carregando dados do painel...
          </div>
        </div>
      </main>
    );
  }

  if (telemetryError) {
    return (
      <main className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black p-6">
        <div className="flex items-center justify-center h-full">
          <div className="text-destructive">
            Erro ao carregar dados: {telemetryError.message}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black p-6">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Painel de Telemetria
        </h1>
        <p className="text-muted-foreground">
          Visão geral em tempo real dos dados de telemetria embarcada
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard
          title="Total de Registros"
          value={stats.totalRecords}
          description="Total de entradas de telemetria"
          icon={Database}
          iconColor="text-blue-500"
        />
        <StatCard
          title="Cidades"
          value={stats.uniqueCities}
          description="Cidades únicas detectadas"
          icon={MapPin}
          iconColor="text-green-500"
        />
        <StatCard
          title="Ruas"
          value={stats.uniqueRoads}
          description="Ruas únicas detectadas"
          icon={Globe}
          iconColor="text-purple-500"
        />
        <StatCard
          title="Média de Satélites"
          value={stats.avgSatellites}
          description="Média de satélites por leitura"
          icon={Satellite}
          iconColor="text-orange-500"
        />
      </div>

      {/* Map and Recent Locations */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Map - Takes 2/3 of the space on large screens */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Mapa de Localizações
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[500px]">
            <MapWrapper data={telemetryData || []} />
          </CardContent>
        </Card>

        {/* Recent Locations Sidebar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Localizações Recentes
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4 max-h-[450px] overflow-y-auto">
              {telemetryData && telemetryData.length > 0 ? (
                [...telemetryData]
                  .sort((a, b) => {
                    const dateA = a.location?.date_time
                      ? new Date(a.location.date_time).getTime()
                      : 0;
                    const dateB = b.location?.date_time
                      ? new Date(b.location.date_time).getTime()
                      : 0;
                    return dateB - dateA;
                  })
                  .slice(0, 10)
                  .map((item) => (
                    <div
                      key={item.location?.id}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm truncate">
                          {item.address?.city || "Cidade Desconhecida"}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {[item.address?.state, item.address?.country]
                            .filter(Boolean)
                            .join(", ") || "Localização desconhecida"}
                        </p>
                        {item.location?.date_time && (
                          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Clock className="h-3 w-3" />
                            {new Date(item.location.date_time).toLocaleString()}
                          </p>
                        )}
                        <div className="flex gap-2 mt-1 text-xs text-muted-foreground">
                          <span>
                            Lat: {item.location?.latitude?.toFixed(4) ?? "N/A"}
                          </span>
                          <span>
                            Lng: {item.location?.longitude?.toFixed(4) ?? "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-muted-foreground text-sm text-center py-4">
                  Nenhum dado de localização disponível
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Stats */}
      {stats.latestRecord && (
        <div className="mt-6 text-sm text-muted-foreground text-center">
          Última atualização:{" "}
          {(stats.latestRecord as Date).toLocaleString("pt-BR")}
        </div>
      )}
    </main>
  );
};

export default Home;
