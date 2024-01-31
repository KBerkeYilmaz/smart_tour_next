import SideBarMenuRoot from "@components/ui/Sidebar/SidebarMenuRoot";
import PackageInfoPanel from "./PackageInfoPanel";
import { unstable_setRequestLocale } from "next-intl/server";
import tourData from '../../../../dummy_tour_id.json'; 
import { TourProvider } from "./TourContextProvider";

const PackageDetail = ({ params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="bg-white  flex justify-center items-center w-screen mb-8">
      <div className="flex-layout flex items-baseline pt-16 max-w-[78.25rem] gap-[4.375rem] grow">
        {/* <!-- DETAILS CONTAINER --> */}
        <TourProvider tourId={params.tourId}>
          <PackageInfoPanel />
          {/*<!-- SIDEBAR START --> */}
          <SideBarMenuRoot />
          {/* <!-- SIDEBAR END --> */}
        </TourProvider>
      </div>
    </main>
  );
};

export default PackageDetail;
