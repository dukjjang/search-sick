import { useState } from 'react';
import { Sick } from '../types/index';
import { getSicks } from '../apis/index';

const useSearch = () => {
  const [cache, setCache] = useState<Sick[]>([]);
  const [sicks, setSicks] = useState<Sick[]>([]);

  const search = async (query: string) => {
    if (!query.length) return;
    const isCache = cache.filter((sick) =>
      sick.sickNm.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    console.log('cache', cache);

    if (isCache.length) setSicks(isCache.slice(0, 7));
    else {
      const serverData = await getSicks(query);
      setCache([...sicks, ...serverData]);
      setSicks([...serverData.slice(0, 7)]);
    }
  };

  return { sicks, search };
};

export default useSearch;
