import { ReleaseType } from "@/graphql/graphql";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Markdown from "react-markdown";

export default function Releases({ releases }: { releases: ReleaseType[] }) {
  return (
    <>
      <div className="space-y-2 mt-4">
        {releases.length === 0 && (
          <p className="font-mono font-medium text-sm">No releases yet.</p>
        )}
        {releases.map((release) => {
          return (
            <div className="flex gap-3" key={release.id}>
              <div className="flex flex-col items-center gap-2 mt-1">
                <div className="text-muted-foreground">
                  <PlusCircledIcon className="w-5 h-5" />
                </div>
                <div className="h-full w-[2px] bg-muted" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3">
                  <h2 className="font-sans text-lg font-semibold flex-shrink-0">
                    {release.prettyReleaseDate}
                  </h2>
                  <div className="w-full h-[1px] border-[1px] border-dashed border-muted"></div>
                  <p className="font-mono text-base text-flair font-semibold ml-auto flex-shrink-0">
                    {release.name}
                  </p>
                </div>
                <Markdown className="prose text-xs py-2">
                  {release.notes}
                </Markdown>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
