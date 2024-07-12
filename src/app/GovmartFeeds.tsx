import { useFetchNotifications } from "@novu/notification-center";

export default function Lama() {
  const { data } = useFetchNotifications({
    query: { feedIdentifier: "govmart" },
  });

  return (
    <div className="m-4 bg-red-300">
      Govmart Feed Data
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
