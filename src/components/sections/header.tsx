import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { MovingElement } from "../navbar";

export function Header({ data }: { data: Record<string, string> }) {
  const handleChange = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="pt-12">
      <div className="space-y-2">
        <p className="text-base font-normal text-muted-foreground">
          hi there 👋, I&apos;m
        </p>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-primary/90">
            {data.NAME}
          </h1>
          <h2 className="flex flex-col gap-1 text-base font-normal text-primary/90">
            <p>
              {data.AGE}, {data.PRONOUN}
            </p>
            <p>{data.HEADLINE}</p>
          </h2>
        </div>

        <div className="flex items-center gap-2 text-sm space-y-2">
          <MovingElement
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow betterhover:hover:bg-primary/90 h-9 px-4 py-2"
            change={() => handleChange(data.RESUME)}
            toChange={false}
            ariaLabel="Resume"
          >
            Resume
          </MovingElement>
          <div className="flex gap-2">
            <MovingElement
              change={() => handleChange(data.EMAIL)}
              ariaLabel="Email"
            >
              <Mail />
            </MovingElement>
            <MovingElement
              change={() => handleChange(data.GITHUB)}
              ariaLabel="Github"
            >
              <Github />
            </MovingElement>
            <MovingElement
              change={() => handleChange(data.LINKEDIN)}
              ariaLabel="Linkedin"
            >
              <Linkedin />
            </MovingElement>
            <MovingElement
              change={() => handleChange(data.FACEBOOK)}
              ariaLabel="Facebook"
            >
              <Facebook />
            </MovingElement>
            {/* <MovingElement
              change={() => handleChange(data.GITLAB)}
              ariaLabel="Gitlab"
            >
              <Gitlab />
            </MovingElement> */}
          </div>
        </div>
      </div>
    </section>
  );
}
