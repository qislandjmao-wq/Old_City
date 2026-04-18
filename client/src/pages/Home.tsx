// 风格提示：残响粗野主义；像边境档案馆而不是普通营销页；版面错位、纹理、冷雾与火光共存
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Flag, MountainSnow, RadioTower, ScrollText } from "lucide-react";
import { toast } from "sonner";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663472474284/Ngs8WC4EB7st5VaHL5HQxX/jiankuzhuojue-hero-ruins-gzh4myhwsVvYbDkExGoz7p.webp";
const signalImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663472474284/Ngs8WC4EB7st5VaHL5HQxX/jiankuzhuojue-emblem-banner-ftGTFGCCsMfpZr4MwuzAhy.webp";

const placeholderSections = [
  {
    id: "01",
    title: "服务器简介",
    summary: "用于放置服务器定位、版本、玩法方向与基础规则。当前保留结构与视觉层级。",
    icon: ScrollText,
  },
  {
    id: "02",
    title: "世界与地图",
    summary: "用于展示世界观设定、城镇区域、地理线路与未来地图入口。当前为内容占位。",
    icon: Compass,
  },
  {
    id: "03",
    title: "加入方式",
    summary: "用于放置白名单、群组、联机地址或申请流程。当前仅保留动作入口样式。",
    icon: RadioTower,
  },
];

const motionProps = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.8 },
};

export default function Home() {
  const comingSoon = () => toast("该模块将在后续版本中逐步开放");

  return (
    <div className="archive-shell min-h-screen">
      <main className="relative overflow-hidden">
        <section className="container relative z-10 pt-6 sm:pt-8">
          <div className="frame-line flex items-center justify-between gap-4 py-4">
            <div>
              <p className="muted-meta">Old_City / Official Frame</p>
              <h1 className="mt-2 font-serif text-lg font-bold tracking-[0.28em] text-stone-100 uppercase">
                艰苦卓绝
              </h1>
            </div>
            <div className="hidden text-right md:block">
              <p className="muted-meta">Status</p>
              <p className="mt-2 text-sm text-stone-300">Framework Online</p>
            </div>
          </div>
        </section>

        <section className="container relative z-10 pb-20 pt-10 md:pb-28 md:pt-14">
          <div className="grid items-end gap-10 xl:grid-cols-[1.08fr_0.92fr]">
            <motion.div {...motionProps} className="max-w-3xl">
              <div className="section-label">Chosen Direction / 残响粗野主义</div>
              <div className="mt-8 space-y-7">
                <p className="muted-meta">Minecraft Server Official Website</p>
                <h2 className="archival-title max-w-4xl text-5xl leading-[1.08] text-stone-50 sm:text-6xl lg:text-7xl">
                  在风雪与废墟之间，
                  <br />
                  为一座服务器保留最初的誓言与坐标。
                </h2>
                <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                  这是“艰苦卓绝”的官网基础框架。当前版本保留了可访问的首页结构、视觉语言与后续扩展接口，暂不填入正式内容，便于你之后持续追加公告、设定、地图、规则与加入信息。
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  onClick={comingSoon}
                  className="h-12 rounded-none border border-amber-500/40 bg-amber-600/90 px-7 text-[0.8rem] tracking-[0.22em] text-slate-950 uppercase shadow-[0_12px_30px_rgba(191,140,82,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-amber-500"
                >
                  预留主入口
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <button
                  type="button"
                  onClick={comingSoon}
                  className="h-12 border border-stone-300/20 px-6 text-left text-sm tracking-[0.2em] text-stone-200 uppercase transition duration-300 hover:border-stone-100/45 hover:bg-white/5"
                >
                  查看后续更新区块
                </button>
              </div>

              <div className="mt-12 grid gap-4 border-l border-stone-200/10 pl-5 sm:grid-cols-3 sm:pl-6">
                <div>
                  <p className="muted-meta">Phase</p>
                  <p className="mt-2 text-xl font-semibold text-stone-100">01</p>
                </div>
                <div>
                  <p className="muted-meta">Content</p>
                  <p className="mt-2 text-xl font-semibold text-stone-100">Blank Framework</p>
                </div>
                <div>
                  <p className="muted-meta">Readiness</p>
                  <p className="mt-2 text-xl font-semibold text-stone-100">Ready To Expand</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.1 }}>
              <div className="grain-overlay hero-shadow steel-card relative min-h-[30rem] overflow-hidden rounded-none">
                <img
                  src={heroImage}
                  alt="艰苦卓绝官网首屏氛围图"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/28 to-slate-950/88" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-md border-l border-amber-400/50 bg-black/20 pl-5 backdrop-blur-sm">
                    <p className="muted-meta">Frontier Record / 0001</p>
                    <p className="mt-3 text-base leading-7 text-stone-200">
                      首屏已完成视觉定调。后续可在此替换为服务器宣言、最新赛季公告或开服信息。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="angled-panel relative z-10 border-y border-stone-200/10 bg-slate-950/60 py-20 backdrop-blur-md md:py-24">
          <div className="container grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <motion.div {...motionProps} className="space-y-6">
              <div className="section-label">Structural Reserve</div>
              <h3 className="archival-title text-4xl leading-tight text-stone-100 sm:text-5xl">
                现在保留框架，
                <br />
                以后逐段填充历史。
              </h3>
              <p className="max-w-xl text-base leading-8 text-stone-300">
                我将这个首页设计成可以长期演化的“档案壳层”：你之后无论是补玩法介绍、更新世界观、添加服务器截图，还是接入加入方式，都能在现有层级上顺延扩展，而不需要推倒重做。
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {placeholderSections.map(({ id, title, summary, icon: Icon }, index) => (
                <motion.article
                  key={id}
                  {...motionProps}
                  transition={{ ...motionProps.transition, delay: index * 0.08 }}
                  className="steel-card placeholder-grid group min-h-72 rounded-none p-6"
                >
                  <div className="flex h-full flex-col justify-between gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="muted-meta">Section {id}</span>
                        <Icon className="size-5 text-amber-300/80 transition duration-300 group-hover:-translate-y-0.5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-2xl font-bold tracking-[0.06em] text-stone-100">
                          {title}
                        </h4>
                        <p className="mt-4 text-sm leading-7 text-stone-300">{summary}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={comingSoon}
                      className="flex items-center justify-between border-t border-stone-100/10 pt-4 text-left text-sm tracking-[0.18em] text-stone-200 uppercase transition duration-300 hover:text-amber-200"
                    >
                      后续填充
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="container relative z-10 py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div {...motionProps} className="steel-card overflow-hidden rounded-none">
              <div className="relative min-h-[20rem]">
                <img
                  src={signalImage}
                  alt="边境信号站氛围图"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/40 to-slate-950/65" />
                <div className="relative z-10 flex min-h-[20rem] items-end p-7 sm:p-10">
                  <div className="max-w-lg">
                    <p className="muted-meta">Reserved Visual Field</p>
                    <p className="mt-3 text-lg leading-8 text-stone-200">
                      这块区域未来可替换为服务器世界截图、阵营视觉、活动招募图或版本长图。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.08 }} className="space-y-6">
              <div className="section-label">Future Expansion</div>
              <h3 className="archival-title text-4xl leading-tight text-stone-100 sm:text-5xl">
                后续更新时，
                <br />
                我们可以从这些方向继续搭建。
              </h3>
              <div className="space-y-4 text-stone-300">
                <div className="steel-card rounded-none p-5">
                  <div className="flex items-start gap-4">
                    <Flag className="mt-1 size-5 text-amber-300" />
                    <div>
                      <p className="text-lg font-semibold text-stone-100">公告与赛季页</p>
                      <p className="mt-2 text-sm leading-7">适合加入开服公告、更新日志、活动预告与维护说明。</p>
                    </div>
                  </div>
                </div>
                <div className="steel-card rounded-none p-5">
                  <div className="flex items-start gap-4">
                    <MountainSnow className="mt-1 size-5 text-amber-300" />
                    <div>
                      <p className="text-lg font-semibold text-stone-100">世界观与势力介绍</p>
                      <p className="mt-2 text-sm leading-7">适合加入背景叙事、地理区划、城镇阵营与历史时间线。</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
