import React, { Suspense } from 'react';
import { API } from '@/services/apiIndex';
import { DropBox } from '@/components/ui/DropBox';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import Loading from '@/components/ui/Loading'; // Импортируйте компонент Loading

const MainContent: React.FC = () => {
  const router = useRouter();

  function handleNextPageClick(makeId: string | null, year: string | null) {
    if (makeId && year) {
      router.push(`/result/${makeId}/${year}`);
    }
  }

  const [vehicleTypes, setVehicleTypes] = React.useState([]);
  const [vehicleYears, setVehicleYears] = React.useState([]);
  const [vehicleMakers, setMakersYears] = React.useState([]);
  const [selectedType, setSelectedType] = React.useState<string | null>(null);
  const [selectedYear, setSelectedYear] = React.useState<string | null>(null);
  const [selectedMaker, setSelectedMaker] = React.useState<string | null>(null);

  React.useEffect(() => {
    API.carTypes.fetchCarTypes?.(setVehicleTypes);
    API.carYears.getYearsArray?.(setVehicleYears);
    console.log('BASE_URL:', process.env.NEXT_PUBLIC_BASE_URL);
  }, []);

  React.useEffect(() => {
    if (selectedType) {
      API.carTypes.fetchCarMakers?.(setMakersYears, selectedType);
    }
  }, [selectedType]);

  return (
    <div className="flex overflow-x-auto py-4">
      <div className="flex h-screen justify-between px-6 py-4">
        <Suspense fallback={<Loading />}>
          <DropBox
            title={'Choose Vehicle Type'}
            payload={vehicleTypes}
            setState={setSelectedType}
            selectedItem={selectedType}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <DropBox
            display={selectedType ? 'none' : ''}
            title={'Choose Year'}
            payload={vehicleYears}
            setState={setSelectedYear}
            selectedItem={selectedYear}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <DropBox
            title={'Choose Maker'}
            payload={vehicleMakers}
            setState={setSelectedMaker}
            selectedItem={selectedMaker}
          />
        </Suspense>
        <Button
            variant={selectedType ? 'destructive' : 'default'}
            onClick={() => handleNextPageClick(selectedMaker, selectedYear)}
            disabled={!selectedType || !selectedMaker}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default MainContent;
