import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const first = trailers?.results[0];
  if (!first) return null;

  return <video poster={first.preview} src={first.data[480]} controls />;
};

export default GameTrailer;
