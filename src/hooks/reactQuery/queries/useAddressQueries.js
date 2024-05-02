import { findAddressDetail } from '@api/GeocodingApi';
import { addressQKey } from '@stores/ReactQueryKEYS';
import { useQuery } from '@tanstack/react-query';

export const useAddressDetailQuery = (address, options) =>
  useQuery({
    ...options,
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
    queryKey: addressQKey.detail(address),
    queryFn: () => findAddressDetail(address)
  });
