import { For } from "solid-js";

interface CardProps {
  title: string;
  url: string;
  description: string;
}

function Card({ title, url, description }: CardProps) {
  return (
    <div class="bg-cardbg flex flex-col border-2 border-cardborder py-4 px-8 rounded-2xl my-4 lg:w-[360px] md:w-[360px] mr-4">
      <div class="flex justify-between">
        <span class="text-[16px] text-skyblue font-[600]">{title}</span>
        <a href={url}>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <p class="text-[20px] text-white font-bold py-4">{description}</p>
    </div>
  );
}

function Cards({ data }: { data: { title: string; data: CardProps[] } }) {
  return (
    <>
      <h2 class="text-white text-[30px] pb-6">{data?.title}</h2>
      <div class="flex flex-wrap sm:flex-col">
        <For each={data?.data} fallback={null}>
          {(item, index) => <Card {...item} />}
        </For>
      </div>
    </>
  );
}

export default Cards;
