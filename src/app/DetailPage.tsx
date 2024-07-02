import { useFetchNotifications } from "@novu/notification-center";

export default function DetailPage() {
  const { data: govmartData } = useFetchNotifications({
    query: { feedIdentifier: "govmart" },
  });

  const { data: triggerData } = useFetchNotifications({
    query: { feedIdentifier: "trigger" },
  });

  console.log("govmartData", govmartData, "triggerData", triggerData);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p>Data Govmart</p>
        <div>
          {govmartData?.pages.map((page) =>
            page.data.map((data, idx) => <div key={idx}>{data._id} </div>)
          )}
        </div>
      </div>
      <div>
        <p>Data Trigger</p>
        <div>
          {triggerData?.pages.map((page) =>
            page.data.map((data, idx) => <div key={idx}>{data._id} </div>)
          )}
        </div>
      </div>
    </div>
  );
}
