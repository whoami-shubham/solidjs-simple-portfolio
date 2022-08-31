import { For } from "solid-js";

export enum SocialLinkKeyType {
  "facebook" = "facebook",
  "instagram" = "instagram",
  "linkedin" = "linkedin",
  "twitter" = "twitter",
  "github" = "github",
  "medium" = "medium",
  "stack-overflow" = "stack-overflow",
  "gmail" = "gmail",
}

export type SocialLinkType = {
  name: SocialLinkKeyType;
  url: string;
};

function CreateLink({ name, url }: SocialLinkType) {
  if (!url) {
    return null;
  }
  if (name == SocialLinkKeyType.gmail) {
    return (
      <a href={url}>
        <i class="fa-solid fa-envelope px-1" />
      </a>
    );
  }
  return (
    <a href={url}>
      <i class={`fa-brands fa-${name} px-1`} />
    </a>
  );
}

function SocialLinks({ data }: { data: SocialLinkType[] }) {
  return (
    <div class="w-full">
      <div class="flex row">
        <For each={data} fallback={null}>
          {(item, index) => (
            <div data-index={index()}>
              <CreateLink {...item} />
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default SocialLinks;
