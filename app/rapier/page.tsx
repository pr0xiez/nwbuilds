import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function Rapier() {
    return (
      <main className="flex flex-col p-8">
        <div className="pb-8">
          <h4 className="text-jade-500">Notes:</h4>
          <span>There should be 1 finisher in every group if you care about killing things at a decent speed at all. If you want to run rapier but already have a Finisher, run an omni evade rapier.</span>
        </div>
        

        <h4>Skill Trees</h4>
        <Tabs defaultValue="finisher" className="">
          <TabsList>
            <TabsTrigger value="finisher">Finisher (Blood)</TabsTrigger>
            <TabsTrigger value="evade">Evade</TabsTrigger>
          </TabsList>
          <TabsContent value="finisher">
            <span className="pb-2">This is the easiest finisher tree to use. If you want to learn more </span>
            <a 
              href="https://docs.google.com/document/d/1uloSV2R9-M3Uq5gb_Kfdg6U118DD-F3rfaP2FRMV2aY/edit#heading=h.ujw8l4cm9bxg" 
              target="_blank"
              className="text-jade-500"
            >
              click here
            </a>
            <Image
              src="/finisher-skill-tree.png"
              width={1000}
              height={1000}
              alt="Picture of the finisher skill tree"
            />
          </TabsContent>
          <TabsContent value="omni-evade">Change your password here.</TabsContent>
        </Tabs>
      </main>
    )
  }
  