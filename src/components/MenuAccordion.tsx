// TODO: Modificar el componente de acordeon para que se adapte a nuestro diseño
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion.tsx";

import data from "../data/menu.json";

const { menu } = data;
export function MenuAccordion() {
  return menu.map((category) => {
    return (
      <Accordion type="single" collapsible className="w-full" key={category.category}>
        <AccordionItem value= {category.category}>
          <AccordionTrigger className="px-5 border-b text-lg">{category.category}</AccordionTrigger>
          {category.items.map((item: any) => {
            return (
              <AccordionContent key={item.name} className="px-5 py-5">
                <div className="flex justify-between">
                  <p className="overflow-clip">{item.name}</p>
                  <div className="flex">
                    <p className="px-1 text-xs">{item.tapa}</p>
                    <p className="px-1 text-xs">{item.media}</p>
                    <p className="px-1 text-xs">{item.racion}</p>
                  </div>
                </div>
              </AccordionContent>
            );
          })}
        </AccordionItem>
      </Accordion>
    );
  });
}

export default MenuAccordion;
