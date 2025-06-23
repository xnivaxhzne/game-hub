import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms.results.find(({ id }) => id === platformId);
};

export default usePlatform;
