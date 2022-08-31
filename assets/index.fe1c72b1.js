import { i as insert, t as template, c as createComponent, F as For, s as setAttribute, m as mergeProps, a as createRenderEffect, b as className, g as getNextElement, d as getNextMarker } from './index.62e39eb7.js';

const _tmpl$$5 = /*#__PURE__*/template(`<div class="w-full"><h2 class="text-white lg:text-[30px] pb-6"></h2><div class="text-primary"></div></div>`);

function About({
  data
}) {
  return (() => {
    const _el$ = _tmpl$$5.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling;

    insert(_el$2, () => data?.title);

    insert(_el$3, () => data?.description);

    return _el$;
  })();
}

const _tmpl$$4 = /*#__PURE__*/template(`<div class="bg-cardbg flex flex-col border-2 border-cardborder py-4 px-8 rounded-2xl my-4 max-w-[360px] mr-4"><div class="flex justify-between"><span class="text-[18px] text-skyblue font-bold"></span><a><i class="fa-solid fa-arrow-up-right-from-square"></i></a></div><p class="text-[27px] text-white font-bold py-4"></p></div>`),
      _tmpl$2$1 = /*#__PURE__*/template(`<h2 class="text-white lg:text-[30px] pb-6"></h2>`),
      _tmpl$3$1 = /*#__PURE__*/template(`<div class="flex flex-wrap"></div>`);

function Card({
  title,
  url,
  description
}) {
  return (() => {
    const _el$ = _tmpl$$4.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild,
          _el$4 = _el$3.nextSibling,
          _el$5 = _el$2.nextSibling;

    insert(_el$3, title);

    setAttribute(_el$4, "href", url);

    insert(_el$5, description);

    return _el$;
  })();
}

function Cards({
  data
}) {
  console.log({
    data
  });
  return [(() => {
    const _el$6 = _tmpl$2$1.cloneNode(true);

    insert(_el$6, () => data?.title);

    return _el$6;
  })(), (() => {
    const _el$7 = _tmpl$3$1.cloneNode(true);

    insert(_el$7, createComponent(For, {
      get each() {
        return data?.data;
      },

      fallback: null,
      children: (item, index) => createComponent(Card, item)
    }));

    return _el$7;
  })()];
}

const _tmpl$$3 = /*#__PURE__*/template(`<div></div>`);

function Divider({
  data
}) {
  const mergeProp = mergeProps({
    className: "my-8"
  }, data);
  return (() => {
    const _el$ = _tmpl$$3.cloneNode(true);

    createRenderEffect(() => className(_el$, mergeProp.className));

    return _el$;
  })();
}

const _tmpl$$2 = /*#__PURE__*/template(`<div class="flex flex-col"><div class="text-white lg:text-[60px] md:text-[40px] sm:text-[30px]"></div><div class="text-primary text-bold"></div></div>`);

function MainCta({
  data
}) {
  const {
    name,
    bio
  } = data;
  return (() => {
    const _el$ = _tmpl$$2.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling;

    insert(_el$2, name);

    insert(_el$3, bio);

    return _el$;
  })();
}

const _tmpl$$1 = /*#__PURE__*/template(`<a><i class="fa-solid fa-envelope px-1"></i></a>`),
      _tmpl$2 = /*#__PURE__*/template(`<a><i></i></a>`),
      _tmpl$3 = /*#__PURE__*/template(`<div class="w-full"><div class="flex row"></div></div>`),
      _tmpl$4 = /*#__PURE__*/template(`<div></div>`);
let SocialLinkKeyType;

(function (SocialLinkKeyType) {
  SocialLinkKeyType["facebook"] = "facebook";
  SocialLinkKeyType["instagram"] = "instagram";
  SocialLinkKeyType["linkedin"] = "linkedin";
  SocialLinkKeyType["twitter"] = "twitter";
  SocialLinkKeyType["github"] = "github";
  SocialLinkKeyType["medium"] = "medium";
  SocialLinkKeyType["stack-overflow"] = "stack-overflow";
  SocialLinkKeyType["gmail"] = "gmail";
})(SocialLinkKeyType || (SocialLinkKeyType = {}));

function CreateLink({
  name,
  url
}) {
  if (!url) {
    return null;
  }

  if (name == SocialLinkKeyType.gmail) {
    return (() => {
      const _el$ = _tmpl$$1.cloneNode(true);

      setAttribute(_el$, "href", url);

      return _el$;
    })();
  }

  return (() => {
    const _el$2 = _tmpl$2.cloneNode(true),
          _el$3 = _el$2.firstChild;

    setAttribute(_el$2, "href", url);

    className(_el$3, `fa-brands fa-${name} px-1`);

    return _el$2;
  })();
}

function SocialLinks({
  data
}) {
  return (() => {
    const _el$4 = _tmpl$3.cloneNode(true),
          _el$5 = _el$4.firstChild;

    insert(_el$5, createComponent(For, {
      each: data,
      fallback: null,
      children: (item, index) => (() => {
        const _el$6 = _tmpl$4.cloneNode(true);

        insert(_el$6, createComponent(CreateLink, item));

        createRenderEffect(() => setAttribute(_el$6, "data-index", index()));

        return _el$6;
      })()
    }));

    return _el$4;
  })();
}

const components = [
	{
		name: "MainCta",
		data: {
			name: "Shubham Jha",
			bio: "Software Engineer | Some other cool title"
		}
	},
	{
		name: "Divider",
		data: {
			className: "my-4"
		}
	},
	{
		name: "SocialLinks",
		data: [
			{
				name: "github",
				url: "https://github.com/whoami-shubham"
			},
			{
				name: "linkedin",
				url: "https://linkedin.com/in/whoamishubham"
			},
			{
				name: "stack-overflow",
				url: "https://stackoverflow.com/users/7784354/shubham-jha?tab=profile"
			},
			{
				name: "gmail",
				url: "mailto:whoanishubham@gmail.com"
			},
			{
				name: "medium",
				url: ""
			},
			{
				name: "twitter",
				url: "https://twitter.com/whoami_shubham"
			},
			{
				name: "instagram",
				url: "https://www.instagram.com/whoami_shubham/"
			},
			{
				name: "facebook",
				url: "https://www.facebook.com/whoami.shubham/"
			}
		]
	},
	{
		name: "Divider",
		data: {
		}
	},
	{
		name: "About",
		data: {
			title: "About Me",
			description: "Hi! I'm Shubham, a 24 y/o software engineer at ShareChat, most of the time I work in Frontend Web (React,NextJs,SolidJs),  Mobile App development (React Native, Flutter) and some other stuffs. I also like contributing on open source projects, writing blogs and learning new computer science concepts!"
		}
	},
	{
		name: "Divider",
		data: {
		}
	},
	{
		name: "Cards",
		data: {
			title: "Projects",
			data: [
				{
					title: "Npm Library",
					description: "obfuscator-io-metro-plugin",
					url: "https://github.com/whoami-shubham/obfuscator-io-metro-plugin"
				},
				{
					title: "Personal Project",
					description: "codeadept_2.0_IDE",
					url: "https://github.com/whoami-shubham/codeadept_2.0_IDE"
				},
				{
					title: "Npm Library",
					description: "typedoc-type-coverage-plugin",
					url: "https://github.com/ShareChat/typedoc-type-coverage-plugin"
				}
			]
		}
	}
];
const data = {
	components: components
};

const _tmpl$ = /*#__PURE__*/template(`<div class="flex justify-center font-default"><div class="my-10  text-primary max-w-[1024px] flex flex-col items-start px-6"><!#><!/><span class="my-6">Made with <i class="fa fa-heart pulse text-[#f00]"></i> using <a href="https://github.com/solidjs/solid-start" target="_blank" class="text-skyblue">Solid Start</a></span></div></div>`);
const componentMap = {
  About,
  MainCta,
  SocialLinks,
  Divider,
  Cards
};
function Home() {
  const components = data.components; //

  return (() => {
    const _el$ = getNextElement(_tmpl$),
          _el$2 = _el$.firstChild,
          _el$4 = _el$2.firstChild,
          [_el$5, _co$] = getNextMarker(_el$4.nextSibling);
          _el$5.nextSibling;

    insert(_el$2, createComponent(For, {
      each: components,
      fallback: null,
      children: (item, index) => {
        const Comp = componentMap[item?.name];
        return createComponent(Comp, {
          get data() {
            return item?.data;
          }

        });
      }
    }), _el$5, _co$);

    return _el$;
  })();
}

export { Home as default };
