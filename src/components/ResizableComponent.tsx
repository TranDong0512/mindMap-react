import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { IResizable } from "@/interface/IResizable";


const ResizableComponent = ({ img1, img2 }: IResizable) => {
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={50} minSize={30}>
                <img src={img1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Image 1" />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={30}>
                <img src={img2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Image 2" />
            </ResizablePanel>
        </ResizablePanelGroup>
    )
};

export default ResizableComponent;
