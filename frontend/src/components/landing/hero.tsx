"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Galaxy from "@/components/ui/galaxy";
import { WordRotate } from "@/components/ui/word-rotate";
import { cn } from "@/lib/utils";

export function Hero({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center",
        className,
      )}
    >
      <div className="absolute inset-0 z-0 bg-black/40">
        <Galaxy
          mouseRepulsion={false}
          starSpeed={0.2}
          density={0.6}
          glowIntensity={0.35}
          twinkleIntensity={0.3}
          speed={0.5}
        />
      </div>
      <FlickeringGrid
        className="absolute inset-0 z-0 translate-y-8 mask-[url(/images/deer.svg)] mask-size-[100vw] mask-center mask-no-repeat md:mask-size-[72vh]"
        squareSize={4}
        gridGap={4}
        color={"white"}
        maxOpacity={0.3}
        flickerChance={0.25}
      />
      <div className="container-md relative z-10 mx-auto flex h-screen flex-col items-center justify-center">
        <h1 className="flex flex-wrap items-center justify-center gap-2 text-center text-4xl font-bold md:text-6xl">
          <div>让 Antler Platform 帮你</div>
          <WordRotate
            words={[
              "深度研究",
              "采集数据",
              "分析数据",
              "生成网页",
              "编写代码",
              "生成幻灯片",
              "生成图片",
              "制作播客",
              "剪辑视频",
              "创作歌曲",
              "整理邮件",
              "完成一切",
              "学习新知",
            ]}
          />
        </h1>
        <p className="text-muted-foreground mt-8 scale-105 text-center text-2xl text-shadow-sm">
          一个会研究、会编码、会创作的超级智能体平台。
          <br />
          借助沙箱、记忆、工具、技能与子智能体,
          <br />
          从几分钟到数小时的任务,它都能一手包办。
        </p>
        <Link href="/workspace">
          <Button className="size-lg mt-8 scale-108" size="lg">
            <span className="text-md">开始体验</span>
            <ChevronRightIcon className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
