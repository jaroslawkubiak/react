import {
  useFetchAlbumsQuery,
  useAddAlbumMutation
} from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation(); // mutation zwraca array: pierwszy argument to funkcja wykonująca mutację, drugi to object results

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-14 w-full" times={4} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="mt-2 mb-4 flex flex-row items-center justify-between">
        <h3 className="ml-4 text-lg font-bold">Albums for {user.name}</h3>
        <Button
          loading={results.isLoading}
          className="border-0 rounded"
          primary
          onClick={handleAddAlbum}
        >
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
