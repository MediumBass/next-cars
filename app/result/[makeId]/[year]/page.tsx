import React, { Suspense } from 'react';
import CarModel from '../../../../components/ui/CarModel';
import Header from '@/components/shared/Header';
import Loading from '@/components/ui/Loading';

export async function generateStaticParams() {
  const makes = [];
  const years = [];

  const paramsArray = [];

  makes.forEach((makeId) => {
    years.forEach((year) => {
      paramsArray.push({ makeId: makeId.toString(), year: year.toString() });
    });
  });

  return paramsArray;
}

async function fetchCarModels(makeId: string, year: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const posts = await res.json();
  return posts;
}

const CarModelsList = async ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) => {
  const posts = await fetchCarModels(makeId, year);

  if (!posts.Results || posts.Results.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-[3vw]">
          No models from this maker this year :(
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      {posts.Results.map((item: any) => (
        <CarModel payload={item} key={item.Model_ID} />
      ))}
    </div>
  );
};

const ResultPage = ({
  params,
}: {
  params: { makeId: string; year: string };
}) => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <CarModelsList makeId={params.makeId} year={params.year} />
      </Suspense>
    </div>
  );
};

export default ResultPage;
