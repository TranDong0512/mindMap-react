
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { IAlert } from "@/interface/IAlert";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export const AlertComponent = ({ color, link, text, detail }: IAlert) => {
    return (
        <Alert className={`border-l-4 border-${color}-500`}>
            <AlertTitle className={`text-lg font-semibold text-${color}-700`}>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    {text}
                </a>
            </AlertTitle>
            <AlertDescription>
                <SyntaxHighlighter
                    language="html"
                    style={darcula}
                    customStyle={{
                        padding: "1rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        overflowX: "auto",
                    }}
                >
                    {detail}
                </SyntaxHighlighter>
            </AlertDescription>
        </Alert>
    )
};
