import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import Layout from "@theme/Layout";
import React from "react";
import IconHowItWorks from "../../static/img/nns/how-it-works.svg";
import IconGovern from "../../static/img/nns/govern.svg";
import IconStake from "../../static/img/nns/stake.svg";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { motion } from "framer-motion";
import BlobGradient from "@site/static/img/gradientBlurredCircle.webp";
import transitions from "@site/static/transitions.json";
import Head from "@docusaurus/Head";
import VideoCard from "../components/Common/VideoCard";
import {
  TranslatedCard,
  TranslatedCardList,
} from "../components/Common/TranslatedCards/TranslatedCards";

const MotionLink = motion(Link);

function NnsPage() {
  return (
    <Layout
      title="Network Nervous System (NNS)"
      // fill in meta description
      description="The NNS is one of the world's largest DAOs that governs the Internet Computer."
      editPath={`https://github.com/dfinity/portal/edit/master/${__filename}`}
    >
      <Head>
        <meta
          property="og:image"
          content={
            "https://internetcomputer.org/img/shareImages/share_nns.webp"
          }
        />
        <meta
          name="twitter:image"
          content={
            "https://internetcomputer.org/img/shareImages/share_nns.webp"
          }
        />
      </Head>
      <main className="text-black relative overflow-hidden">
        <DarkHeroStyles></DarkHeroStyles>
        <AnimateSpawn variants={transitions.container}>
          <section className="overflow-hidden bg-infinite text-white">
            <div className="container-10 pt-12 mb-60 md:mb-52 md:pt-36 relative">
              <div className="md:w-6/10">
                <motion.h1
                  className="tw-heading-3 md:tw-heading-2 mb-6"
                  variants={transitions.item}
                >
                  Network Nervous System (NNS)
                </motion.h1>
                <motion.p
                  className="tw-lead-sm md:tw-lead mb-8"
                  variants={transitions.item}
                >
                  The NNS is one of the world's largest DAOs that governs the
                  Internet Computer. It is a 100% onchain, permissionless system
                  that continuously upgrades the Internet Computer based on the
                  voting of ICP token holders.
                </motion.p>
                <MotionLink
                  className="button-white"
                  href="https://nns.ic0.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={transitions.item}
                >
                  Go to the NNS
                </MotionLink>
              </div>
            </div>
            <div className="container-10 relative">
              <motion.img
                src="/img/whiteBlurredCircle.webp"
                alt=""
                className="absolute pointer-events-none max-w-none w-[800px] aspect-square -right-[200px] bottom-[-300px] md:w-[1500px] md:bottom-[-680px] md:right-[-550px] object-contain object-center"
                variants={transitions.item}
              />
            </div>
          </section>
          <motion.section
            className="container-12 relative h-60 sm:h-30"
            variants={transitions.item}
          >
            <img
              src="/img/nns/hero.svg"
              alt=""
              loading="lazy"
              className="w-full max-w-md sm:w-auto sm:absolute pointer-events-none right-5 -translate-y-1/2 sm:-translate-y-2/3"
            />
            {/* <HeroGraphic className="w-full max-w-md sm:w-auto sm:absolute pointer-events-none right-5 -translate-y-1/2 sm:-translate-y-2/3" /> */}
          </motion.section>
        </AnimateSpawn>
        <section className="container-12">
          <TranslatedCardList>
            <TranslatedCard
              title="How it works"
              icon={<IconHowItWorks aria-hidden="true" />}
            >
              <motion.p
                className="mb-6 tw-paragraph"
                variants={transitions.item}
              >
                The Internet Computer doesn’t require complicated forks to
                upgrade its capacity. Anyone can submit a proposal to make
                protocol level changes. Once approved by ICP token holders,
                these changes are automatically deployed by the NNS, seamlessly
                upgrading the network. For participating in governance, ICP
                token holders receive voting rewards.
              </motion.p>
              <MotionLink
                className="link-external"
                href="https://learn.internetcomputer.org/hc/en-us/articles/33692645961236-Overview"
                target="_blank"
                rel="noopener noreferrer"
                variants={transitions.item}
              >
                Learn more about network governance
              </MotionLink>
            </TranslatedCard>
            <TranslatedCard
              title="Help govern the Internet Computer"
              icon={<IconGovern aria-hidden="true" />}
            >
              <motion.p
                className="mb-6 tw-paragraph"
                variants={transitions.item}
              >
                Anyone can participate in governance by simply sending ICP to
                the NNS and staking it in neurons. These neurons have to be
                locked for a specific time between 6 months and 8 years to be
                eligible for voting and earning voting rewards.
              </motion.p>
              <motion.p
                className="mb-6 tw-paragraph"
                variants={transitions.item}
              >
                Once locked, neurons can vote on proposals manually or follow
                the vote of other neurons — this is called liquid democracy. The
                longer a neuron is locked for, the more voting rewards it
                collects
              </motion.p>
              <MotionLink
                className="button-primary"
                href="https://nns.ic0.app"
                target="_blank"
                rel="noopener noreferrer"
                variants={transitions.item}
              >
                Go to the NNS
              </MotionLink>
            </TranslatedCard>
            <TranslatedCard
              title="Earn staking rewards"
              icon={<IconStake aria-hidden="true" />}
            >
              <motion.p
                className="mb-6 tw-paragraph"
                variants={transitions.item}
              >
                Voting rewards are distributed among participants who have
                locked ICP in neurons and are voting either manually or follow
                other neurons that vote. Rewards are distributed daily to voting
                neurons as maturity. This maturity is unrealized ICP that can be
                either staked or spawned. Staking maturity adds to the voting
                power of the neuron. Spawning mints the maturity into a neuron
                that becomes liquid after a week so that the ICP contained in
                the neuron can also be used outside of the NNS.
              </motion.p>
              <MotionLink
                className="link-external"
                href="https://dashboard.internetcomputer.org/governance"
                target="_blank"
                rel="noopener noreferrer"
                variants={transitions.item}
              >
                Track staking rewards
              </MotionLink>
            </TranslatedCard>
          </TranslatedCardList>
        </section>
        <AnimateSpawn
          variants={transitions.container}
          className="container-10 mt-20 md:mt-30"
        >
          <div className="text-center md:w-6/10 md:mx-auto mb-6 md:mb-20">
            <motion.h2
              variants={transitions.item}
              className="tw-heading-4 md:tw-heading-60 mb-3 md:mb-8"
            >
              Staking on NNS: <br />
              Step-by-Step Guide
            </motion.h2>

            <motion.p
              variants={transitions.item}
              className="tw-paragraph md:tw-lead mb-0"
            >
              Get a high-level overview of how to participate in governance,
              from acquiring ICP tokens to staking and voting.
            </motion.p>
          </div>
          <motion.div variants={transitions.item}>
            <VideoCard
              title="How to stake ICP"
              label="NNS Explained: Video Tutorial series"
              image="https://i3.ytimg.com/vi/3o0eBOaHP_4/maxresdefault.jpg"
              link="https://www.youtube.com/watch?v=3o0eBOaHP_4&list=PLuhDt1vhGcrclxfmztDd6OKE80dnrFmG6&index=4"
              description="Step-by-step guide on how to create a neuron in the NNS. How to estimate voting rewards or pick other neurons to follow."
            />
          </motion.div>
        </AnimateSpawn>

        <section className="text-white relative py-30 md:py-40 container-12">
          <AnimateSpawn
            el={motion.img}
            variants={transitions.fadeIn}
            src={BlobGradient}
            alt=""
            className="max-w-none w-[1200px] md:w-[1200px] absolute top-[-200px] md:top-[-200px] left-1/2 -translate-x-1/2 z-[-1]"
          />
          <AnimateSpawn
            className="mx-auto text-center w-8/12 mb-16 md:mb-8"
            variants={transitions.container}
          >
            <motion.h2
              className="tw-heading-4 md:tw-heading-60 mb-3 md:mb-8"
              variants={transitions.item}
            >
              Check out the open and autonomous governance system running 100%
              on chain
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-8"
              variants={transitions.item}
            ></motion.p>
            <MotionLink
              variants={transitions.item}
              className="button-white"
              href="https://nns.ic0.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to the NNS
            </MotionLink>
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default NnsPage;
