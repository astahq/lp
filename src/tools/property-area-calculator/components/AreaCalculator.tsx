import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Ruler, Square, Plus, Trash2 } from "lucide-react";

interface Room {
  id: string;
  name: string;
  length: number;
  width: number;
}

type Unit = "metres" | "feet";

const AreaCalculator = () => {
  const [unit, setUnit] = useState<Unit>("metres");
  const [rooms, setRooms] = useState<Room[]>([
    { id: "1", name: "Living Room", length: 5, width: 4 },
    { id: "2", name: "Bedroom 1", length: 4, width: 3.5 },
    { id: "3", name: "Kitchen", length: 3, width: 3 },
  ]);

  const addRoom = () => {
    const newRoom: Room = {
      id: Date.now().toString(),
      name: `Room ${rooms.length + 1}`,
      length: 0,
      width: 0,
    };
    setRooms([...rooms, newRoom]);
  };

  const removeRoom = (id: string) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((room) => room.id !== id));
    }
  };

  const updateRoom = (id: string, field: keyof Room, value: string | number) => {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, [field]: value } : room
      )
    );
  };

  const calculations = useMemo(() => {
    const roomCalculations = rooms.map((room) => {
      const lengthInMetres = unit === "feet" ? room.length * 0.3048 : room.length;
      const widthInMetres = unit === "feet" ? room.width * 0.3048 : room.width;
      
      const areaSqm = lengthInMetres * widthInMetres;
      const areaSqft = areaSqm * 10.764;
      
      return {
        ...room,
        areaSqm,
        areaSqft,
      };
    });

    const totalSqm = roomCalculations.reduce((sum, room) => sum + room.areaSqm, 0);
    const totalSqft = totalSqm * 10.764;

    return {
      rooms: roomCalculations,
      totalSqm,
      totalSqft,
    };
  }, [rooms, unit]);

  const formatNumber = (value: number, decimals = 2) => {
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  };

  const unitLabel = unit === "metres" ? "metres" : "feet";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-6">
          <CardTitle className="flex flex-col gap-4 text-base font-semibold text-foreground sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center gap-2.5">
              <Ruler className="h-5 w-5 text-primary" />
              Room Dimensions
            </span>
            <div className="flex items-center gap-2">
              <div className="flex rounded-lg border border-border p-1">
                <button
                  onClick={() => setUnit("metres")}
                  className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                    unit === "metres"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Metres
                </button>
                <button
                  onClick={() => setUnit("feet")}
                  className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                    unit === "feet"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Feet
                </button>
              </div>
              <Button
                onClick={addRoom}
                size="sm"
                variant="outline"
                className="gap-1"
              >
                <Plus className="h-4 w-4" />
                Add Room
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="rounded-lg border border-border p-4 space-y-4"
            >
              <div className="flex items-center justify-between">
                <Input
                  value={room.name}
                  onChange={(e) => updateRoom(room.id, "name", e.target.value)}
                  className="max-w-[200px] font-medium h-11 border-border bg-muted/50"
                  placeholder="Room name"
                />
                {rooms.length > 1 && (
                  <Button
                    onClick={() => removeRoom(room.id)}
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor={`length-${room.id}`}
                    className="text-sm text-muted-foreground"
                  >
                    Length ({unitLabel})
                  </Label>
                  <Input
                    id={`length-${room.id}`}
                    type="number"
                    value={room.length || ""}
                    onChange={(e) =>
                      updateRoom(room.id, "length", parseFloat(e.target.value) || 0)
                    }
                    className="h-11 border-border bg-muted/50"
                    placeholder="0.00"
                    step="0.1"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor={`width-${room.id}`}
                    className="text-sm text-muted-foreground"
                  >
                    Width ({unitLabel})
                  </Label>
                  <Input
                    id={`width-${room.id}`}
                    type="number"
                    value={room.width || ""}
                    onChange={(e) =>
                      updateRoom(room.id, "width", parseFloat(e.target.value) || 0)
                    }
                    className="h-11 border-border bg-muted/50"
                    placeholder="0.00"
                    step="0.1"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2 text-sm">
                <span className="text-muted-foreground">Room Area:</span>
                <span className="font-mono font-medium text-foreground">
                  {unit === "metres"
                    ? `${formatNumber(calculations.rooms[index]?.areaSqm || 0)} m²`
                    : `${formatNumber(calculations.rooms[index]?.areaSqft || 0)} sq ft`}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2.5 text-base font-semibold text-foreground">
            <Square className="h-5 w-5 text-primary" />
            Total Property Area
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="rounded-xl bg-secondary px-6 py-5 text-center">
            <p className="mb-1 text-sm text-muted-foreground">
              Total Floor Area
            </p>
            {unit === "metres" ? (
              <>
                <p className="text-4xl font-bold text-primary">
                  {formatNumber(calculations.totalSqm)} m²
                </p>
                <p className="mt-1 text-lg text-muted-foreground">
                  {formatNumber(calculations.totalSqft)} sq ft
                </p>
              </>
            ) : (
              <>
                <p className="text-4xl font-bold text-primary">
                  {formatNumber(calculations.totalSqft)} sq ft
                </p>
                <p className="mt-1 text-lg text-muted-foreground">
                  {formatNumber(calculations.totalSqm)} m²
                </p>
              </>
            )}
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-foreground text-sm">Room Breakdown</h4>
            {calculations.rooms.map((room) => (
              <div
                key={room.id}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3.5"
              >
                <span className="text-sm font-medium">{room.name}</span>
                <span className="font-mono text-sm text-foreground">
                  {unit === "metres"
                    ? `${formatNumber(room.areaSqm)} m²`
                    : `${formatNumber(room.areaSqft)} sq ft`}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <div>
              <p className="text-sm font-medium text-foreground">
                Quick Conversion Reference
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 rounded-lg border border-border bg-card px-4 py-3 text-xs text-muted-foreground">
            <p>1 m² = 10.764 sq ft</p>
            <p>1 sq ft = 0.093 m²</p>
            <p>1 acre = 4,047 m²</p>
            <p>1 hectare = 10,000 m²</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AreaCalculator;
