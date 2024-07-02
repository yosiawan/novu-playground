"use client";

import { NovuProvider } from "@novu/notification-center";
import DetailPage from "./DetailPage";

const NOVU_CONFIGURATION: {
  novuAppId: string;
  novuBackendUrl: string;
  novuSocketUrl: string;
} = {
  novuAppId: process.env.NEXT_PUBLIC_NOVU_APP_ID ?? "",
  novuBackendUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
  novuSocketUrl: process.env.NEXT_PUBLIC_WS_URL ?? "",
};

const subscriberHash =
  "d1b2fbb4dca54554c4d7f21750237795f6e56c38169ea0377afc7d066395fd21";
const subscriberId = "01HKPBA7KQFRTBF1AMNAX0RP40";

export default function Home() {
  return (
    <div>
      <NovuProvider
        applicationIdentifier={NOVU_CONFIGURATION.novuAppId}
        backendUrl={NOVU_CONFIGURATION.novuBackendUrl}
        socketUrl={NOVU_CONFIGURATION.novuSocketUrl}
        subscriberId={subscriberId}
        subscriberHash={subscriberHash}
        i18n="id"
        initialFetchingStrategy={{
          fetchNotifications: true,
          fetchUnseenCount: true,
        }}
        stores={[
          { storeId: "govmart", query: { feedIdentifier: "govmart" } },
          { storeId: "trigger", query: { feedIdentifier: "trigger" } },
        ]}
      >
        <DetailPage />
      </NovuProvider>
    </div>
  );
}
