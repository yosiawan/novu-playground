import { useFetchNotifications } from "@novu/notification-center";

export default function Baru() {
  const { data } = useFetchNotifications({
    query: { feedIdentifier: "govmart" },
  });

  return (
    <div className="m-4 bg-green-300">
      Data Baru:
      <div>
        {data?.pages.map((page) =>
          page.data.map((data, idx) => (
            <div key={idx}>{JSON.stringify(data.payload)} </div>
          ))
        )}
      </div>
    </div>
  );
}
