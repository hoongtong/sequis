import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "../../../chunks/index-756e41cf.js";
const Avatar_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { field } = $$props;
  let { university } = $$props;
  let { link = void 0 } = $$props;
  let { score } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.university === void 0 && $$bindings.university && university !== void 0)
    $$bindings.university(university);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.score === void 0 && $$bindings.score && score !== void 0)
    $$bindings.score(score);
  return `<div class="${"bg-black h-screen w-screen text-white rounded-2xl p-3 flex flex-col justify-center items-center min-w-min"}"><div class="${"w-36 h-36 bg-highlight2 flex items-center justify-center rounded-full"}"><img class="${"rounded-full w-32"}" src="${"https://www.blexar.com/avatar.png"}" alt="${"avatar"}"></div>
	<p class="${"text-xl"}">${escape(name)}</p>
	<p class="${"text-sm"}">${escape(field)}</p>
	<p class="${"text-sm"}">${escape(university)}</p>
	${link !== void 0 ? `<p>${escape(link)}</p>` : ``}
	<div class="${"my-4 flex flex-col items-center"}"><p class="${"text-sm"}">Overall score</p>
		<p class="${"text-xl"}">${escape(score)}/10</p></div>
	<button class="${"rounded-full bg-highlight2 text-white py-2 px-3"}">Rate professor ${escape(name)}</button></div>`;
});
const Class_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { courses } = $$props;
  if ($$props.courses === void 0 && $$bindings.courses && courses !== void 0)
    $$bindings.courses(courses);
  return `<div class="${"flex flex-col"}"><span class="${"text-highlight"}">Courses</span>
    
    ${each(courses, (course) => {
    return `<div class="${"border border-highlight text-highlight rounded-3xl h-28 mt-3 flex flex-col justify-center items-center"}"><p>${escape(course.id)}</p>
            <p>${escape(course.name)}</p>
        </div>`;
  })}</div>`;
});
const Metrics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metrics } = $$props;
  if ($$props.metrics === void 0 && $$bindings.metrics && metrics !== void 0)
    $$bindings.metrics(metrics);
  return `<div class="${"flex flex-col mx-2"}"><span class="${"text-primary mb-3"}">Metrics</span>
    <div class="${"grid grid-cols-1 md:grid-cols-2 gap-3"}">${each(metrics, (metric) => {
    return `<div class="${"border border-primary text-primary rounded-3xl h-28 flex flex-col justify-center items-center"}"><p>${escape(metric.name)}</p>
                <p>${escape(metric.score)}</p>
            </div>`;
  })}</div></div>`;
});
const U5Bnameu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container grid grid-rows-3 md:grid-cols-4 max-w-full md:h-screen gap-3 "}">${validate_component(Avatar_card, "AvatarCard").$$render($$result, {
    name: "John Doe",
    field: "IDLab",
    university: "UGent",
    score: 12
  }, {}, {})}
	<div class="${"col-span-2"}">${validate_component(Metrics, "Metrics").$$render($$result, {
    metrics: [
      { "name": "Availability", "score": 2 },
      { "name": "hngfioewjbkgr", "score": 8 },
      { "name": "gerwgw", "score": 3 },
      { "name": "rweg", "score": 4 },
      { "name": "wegrgw", "score": 10 }
    ]
  }, {}, {})}</div>
	${validate_component(Class_list, "ClassList").$$render($$result, {
    courses: [{ id: "E12341", name: "Robotics" }, { id: "E25134", name: "Programming" }]
  }, {}, {})}</div>`;
});
export { U5Bnameu5D as default };
