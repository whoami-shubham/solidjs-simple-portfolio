import { For } from "solid-js";
import About from "~/components/About";
import Cards from "~/components/Cards";
import Divider from "~/components/Divider";
import MainCta from "~/components/MainCta";
import SocialLinks, { SocialLinkType } from "~/components/SocialLinks";
import data from "../metaData.json";

const componentMap = {
  About,
  MainCta,
  SocialLinks,
  Divider,
  Cards,
};

export default function Home() {
  const components = data.components;

  //

  return (
    <div class="flex justify-center font-default">
      <div class="my-10  text-primary max-w-[1024px] flex flex-col items-start px-6">
        <For each={components} fallback={null}>
          {(item, index) => {
            const Comp = componentMap[item?.name];

            return <Comp data={item?.data} />;
          }}
        </For>
        <span class="my-6">
          Made with <i class="fa fa-heart pulse text-[#f00]"></i> using{" "}
          <a
            href="https://github.com/solidjs/solid-start"
            target="_blank"
            class="text-skyblue"
          >
            Solid Start
          </a>
        </span>
      </div>
    </div>
  );
}
