import { useParams } from "react-router-dom";
import { getToolBySlug } from "@/tools/config";
import NotFound from "./NotFound";

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? getToolBySlug(slug) : undefined;

  if (!tool) {
    return <NotFound />;
  }

  const ToolComponent = tool.component;
  return <ToolComponent />;
};

export default ToolPage;
