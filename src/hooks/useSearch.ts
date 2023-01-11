import { useState } from 'react';
import { Sick } from '../types/index';
import { getSicks } from '../apis/index';

const useSearch = (options?: { staleTime?: number; cacheTime?: number }) => {
  const [cache, setCache] = useState<Sick[]>([]);
  const [sicks, setSicks] = useState<Sick[]>([]);

  const search = async (query: string) => {
    if (!query.length) return;
    const isCache = cache.filter((sick) =>
      sick.sickNm.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );

    if (isCache.length) setSicks(isCache.slice(0, 7));
    else {
      const serverData = await getSicks(query);
      setCache([...sicks, ...serverData]);
      setSicks([...serverData.slice(0, 7)]);
    }
  };

  if (options?.cacheTime)
    setInterval(() => {
      setCache([]);
      console.log('캐시 초기화', cache);
    }, options.cacheTime);

  if (options?.staleTime)
    setInterval(() => {
      setSicks([]);
      console.log('sicks 초기화', cache);
    }, options.staleTime);

  return { sicks, search };
};

export default useSearch;
