import { useState } from 'react';
import { Sick } from '../types/index';
import { getSicks } from '../apis/index';
import { useInterval } from './useInterval';

const useSearch = (options?: { staleTime?: number; cacheTime?: number }) => {
  const [cache, setCache] = useState<Sick[]>([]);
  const [sicks, setSicks] = useState<Sick[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (query: string) => {
    setIsLoading(true);

    if (!query.length) return;
    const isCache = cache.filter((sick) =>
      sick.sickNm.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );

    if (isCache.length) {
      setSicks(isCache.slice(0, 7));
      console.log('캐시 사용함', cache);
      setIsLoading(false);
    } else {
      const serverData = await getSicks(query);
      if (serverData) {
        setCache([...sicks, ...serverData]);
        setSicks([...serverData.slice(0, 7)]);
        setIsLoading(false);
      }
    }
  };

  if (options?.cacheTime)
    useInterval(() => {
      setCache([]);
      console.log('cache 초기화');
    }, options.cacheTime);

  if (options?.staleTime)
    useInterval(() => {
      setSicks([]);
      console.log('sicks 초기화');
    }, options.staleTime);

  return { sicks, search, isLoading };
};

export default useSearch;
