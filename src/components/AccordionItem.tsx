import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IData } from "@/interface/IData";

export const AccordionItemComponent = ({ data = [] }: IData) => {
    return (
        <Accordion type="single" collapsible className="w-full">
            {data.map((item: { question: string; answers: string[] }, index: number) => (
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 last:border-b-0"
                >
                    <AccordionTrigger className="text-base font-semibold text-gray-800 hover:text-blue-600 py-4 transition-colors duration-200">
                        {item.question}
                    </AccordionTrigger>
                    {item.answers.map((answer: string, idx: number) => (
                        <AccordionContent
                            key={idx}
                            className="text-gray-600 leading-relaxed py-2"
                        >
                            <p>{answer}</p>
                        </AccordionContent>
                    ))}
                </AccordionItem>
            ))}
        </Accordion>
    )
};
