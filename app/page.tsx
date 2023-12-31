import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "@/utils/firebase";
import { ProjectData } from "@/utils/types";
import safeJsonStringify from "safe-json-stringify";

export default async function Home() {
  let projects: ProjectData[] = [];
  try {
    const projQuery = query(collection(firestore, "projects"),orderBy("dateAdded","desc"))
    const projectsDocs = await getDocs(projQuery);
    projects = projectsDocs.docs.map((doc) =>
      JSON.parse(
        safeJsonStringify({
          id: doc.id,
          ...doc.data(),
        })
      )
    );
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex justify-center w-screen mt-2 ">
      <div className="max-w-3xl w-full">
        <Header />
        {projects && <MainContent projects={projects} />}

        <Footer />
      </div>
    </div>
  );
}
