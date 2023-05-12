<script setup>
import { ref, watch, computed, reactive, Teleport } from "vue";

defineProps({
  msg: String,
});

const darkMode = ref(false);

const toggleDarkMode = () => (darkMode.value = !darkMode.value);

const site = reactive({
  brand: "AlisoViejo.dev",
  name: "Aliso Viejo Devs",
  email: "nickroblancaster@gmail.com",
  phone: "7143952633",
  address: ["22501 Chase", "Apt 3112", "Aliso Viejo", "CA", "92656"],
});

const formattedPhone = computed(() => {
  const [one, two, three, four, five, six, seven, eight, nine, ten] = [
    ...site.phone,
  ];

  return `${one}${two}${three}-${four}${five}${six}-${seven}${eight}${nine}${ten}`;
});

const page = ref(1);

const rotatingColors = ref([
  "hover:bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500 hover:text-white",
  "hover:bg-gradient-to-br hover:from-green-500 hover:to-yellow-500 hover:text-white",
  "hover:bg-gradient-to-br hover:from-teal-500 hover:to-rose-500 hover:text-white",
]);

const ourWork = ref([
  {
    companyName: "Reform Alliance LLC",
    quote: `"Got my site looking great and even helped me get google
                      apps integrated and collecting lead details"`,
    author: "Gianni F.",
    url: "https://reformalliance.org/",
  },

  {
    companyName: "Swift Permits LLC",
    quote: `"Helped me get my site up and running, great support and maintainence of the site for super cheap!"`,
    author: "David J.",
    url: "https://www.swift-permits.com/",
  },

  {
    companyName: "Skywave CRM",
    quote: `"Gave him the breakdown of what I was looking for and they were able to get the site live really fast! They can make your site do exactly what you want! Customized everything!"`,
    author: "Brian F.",
    url: "https://skywave.app/",
  },
]);

const team = ref([
  {
    name: "Nicholas Lancaster",
    quote: `"Technology is not just a tool, but an enabler of limitless possibilities. Embrace innovation and empower your teams to redefine what's possible."`,
    role: "Chief Technology Officer",
    resume: "",
  },
  {
    name: "Edward Franklin",
    quote: `"Sales is not just about closing deals; it's about building meaningful relationships. Understand your customers' needs and deliver value that goes beyond the transaction."`,
    role: "VP of Sales",
    resume: "",
  },
  {
    name: "Anthony McNamara",
    quote: `"Success is not solely measured by the destination but by the journey we take to get there. Embrace challenges, learn from failures, and inspire others to persevere along the path to greatness."`,
    role: "Cheif of Coordination",
    resume: "",
  },
]);

const modalEmail = ref(false);
const modalCall = ref(false);
const modalGetStarted = ref(false);

const copyText = (textToCopy) => {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Copying to clipboard was successful!");
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
};
</script>

<template>
  <Teleport to="#modals-target">
    <Modal
      :dark="darkMode"
      :modalShown="modalEmail"
      :modalHeader="'Email Us'"
      @close-modal="modalEmail = false"
    >
      <template #body>
        <div
          class="flex flex-col p-3 justify-center items-center h-full gap-5 w-full"
        >
          <h1 class="text-2xl">Our Email</h1>
          <div class="flex flex-row rounded-2xl shadow-2xl">
            <input
              disabled
              type="text"
              class="p-3 rounded-l-2xl bg-white"
              :value="site.email"
            /><button
              @click="copyText(site.email)"
              class="p-3 bg-gray-500 text-white rounded-r-2xl hover:bg-gray-700"
            >
              Copy
            </button>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex p-3">
          <a
            :href="`mailto:` + site.email"
            class="p-3 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-700 shadow-2xl"
          >
            Compose Email
          </a>
        </div>
      </template>
    </Modal>

    <Modal
      :dark="darkMode"
      :modalShown="modalGetStarted"
      :modalHeader="'Get Started'"
      @close-modal="modalGetStarted = false"
    >
      <template #body>
        <div
          class="h-full w-full flex flex-col justify-center items-center p-5"
        >
          <div class="bg-gray-500 text-white rounded-2xl p-5 text-center">
            <p class="text-3xl">Coming Soon</p>
            <p>
              Here you'll be able to fill out a questionaire that will help us
              speed along the development process for you and your product.
            </p>
          </div>
        </div>
      </template>

      <template #footer> </template>
    </Modal>

    <Modal
      :dark="darkMode"
      :modalShown="modalCall"
      :modalHeader="'Call Us'"
      @close-modal="modalCall = false"
    >
      <template #body>
        <div
          class="flex flex-col p-3 justify-center items-center h-full gap-5 w-full"
        >
          <h1 class="text-2xl">Our Phone Number</h1>
          <div
            class="flex flex-row justify-center rounded-2xl shadow-2xl w-full"
          >
            <input
              disabled
              type="text"
              class="inline p-3 rounded-l-2xl bg-white"
              :value="formattedPhone"
            /><button
              @click="copyText(site.phone)"
              class="inline p-3 bg-gray-500 text-white rounded-r-2xl hover:bg-gray-700"
            >
              Copy
            </button>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex p-3">
          <a
            :href="'tel:' + site.phone"
            class="p-3 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-700 shadow-2xl"
          >
            Call Now
          </a>
        </div>
      </template>
    </Modal>
  </Teleport>
  <div class="w-screen h-screen flex flex-col justify-between">
    <!-- notices -->
    <!-- <div class=""> -->
    <!-- notice example -->
    <!-- <div class="w-full p-3 bg-red-500">
        <p class="text-white">This is my notice</p>
      </div> -->
    <!-- </div> -->

    <!-- nav -->
    <div class="w-full">
      <div
        :class="darkMode ? 'bg-slate-700' : 'bg-slate-50'"
        class="fixed top-0 z-10 w-full flex flex-row justify-between items-center gap-5"
      >
        <!-- nav items -->
        <!-- left -->
        <div class="p-1">
          <!-- will be image in future -->
          <!-- <img src="" alt="" /> -->
          <!-- using text for now -->
          <h1
            class="text-xl p-1 lg:p-3 border rounded-xl"
            :class="
              darkMode
                ? 'text-slate-700 bg-slate-50'
                : 'text-white bg-slate-700'
            "
          >
            {{ "$\{" + site.brand + "\}" }}
          </h1>
        </div>
        <!-- middle -->
        <!-- <div class="flex flex-row justify-center flex-1 p-3"></div> -->
        <!-- right -->
        <div
          class="flex flex-row justify-end items-center flex-1 p-2 lg:gap-2 gap-1"
        >
          <!-- button toolbar -->
          <button
            @click="toggleDarkMode"
            :class="
              darkMode
                ? 'bg-white border-slate-700'
                : 'bg-slate-700 border-white'
            "
            class="border-4 border-dotted p-1 lg:p-3 rounded-full h-6 w-6"
          ></button>
          <div
            :class="
              page === 1
                ? 'bg-indigo-500 hover:bg-indigo-700 font-bold'
                : 'bg-slate-500 hover:bg-slate-700'
            "
            @click="page = 1"
            class="rounded-xl border-none cursor-pointer text-white p-1 lg:p-3 flex items-center text-center"
          >
            Home
          </div>
          <div
            :class="
              page === 2
                ? 'bg-indigo-500 hover:bg-indigo-700 font-bold'
                : 'bg-slate-500 hover:bg-slate-700'
            "
            @click="page = 2"
            class="rounded-xl border-none cursor-pointer text-white p-1 lg:p-3 flex items-center text-center"
          >
            About
          </div>
        </div>
      </div>
    </div>
    <div
      class="overflow-y-auto h-full flex flex-row justify-between flex-1 bg-gray-50"
    >
      <!-- if want to use left column later -->
      <!-- <div class=""></div> -->
      <div v-show="page === 1" class="flex-1">
        <div
          class="relative flex flex-col justify-center items-center gap-10 w-full min-h-full bg-gradient-to-br from-indigo-500 via-orange-500 to-sky-500 p-3 py-20"
        >
          <h1 class="text-5xl text-white text-center">{{ site.name }}</h1>
          <h1 class="text-2xl text-white text-center">
            Custom website design and development
          </h1>

          <!-- projects -->
          <div
            class="flex flex-col justify-between gap-5 border rounded-2xl p-5 w-4/6"
          >
            <h1 class="text-3xl text-center text-white">Our Work</h1>

            <div
              class="flex flex-col md:flex-row justify-between rounded-2xl gap-5 overflow-x-auto"
            >
              <!-- holds a project -->
              <div
                v-for="(work, workIndex) in ourWork"
                :key="workIndex"
                class="overflow-hidden flex-1 rounded-2xl border cursor-default"
                :class="rotatingColors[workIndex % rotatingColors.length]"
              >
                <div class="flex flex-col justify-between h-full">
                  <!-- header -->
                  <div
                    class="flex flex-row justify-between text-white border-b"
                  >
                    <div class="p-3">
                      {{ work.companyName }}
                    </div>
                    <a
                      :href="work.url"
                      target="_blank"
                      class="hover:bg-slate-800 text-white p-3"
                    >
                      View Site
                    </a>
                  </div>
                  <!-- body -->
                  <div class="flex flex-row items-center text-white p-3 flex-1">
                    <p class="block italic text-center">
                      {{ work.quote }}
                    </p>
                  </div>
                  <div
                    class="flex flex-row justify-end text-white p-3 border-t"
                  >
                    <p class="block">- {{ work.author }}</p>
                  </div>
                  <!-- footer -->
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <h1 class="text-2xl text-white italic text-center">
            "The site you want or your money back... Gauranteed" -The CEO
          </h1>
        </div>
      </div>

      <div v-show="page === 2" class="flex-1 py-20">
        <div
          class="relative flex flex-col justify-center items-center gap-10 w-full min-h-full bg-gradient-to-br from-indigo-500 to-sky-500 p-3"
        >
          <div
            class="flex flex-col gap-5 bg-gradient-to-br from-red-500 via-yellow-500 to-rose-500 p-5 rounded-2xl text-justify lg:w-1/2"
          >
            <h1 class="text-3xl text-white text-center">About Us</h1>
            <div class="flex flex-col text-lg text-white border rounded-2xl">
              <h1 class="p-5">
                We are a small a team of high performing developers. We don't
                mean to toot our horn but we're great at what we do. We help
                make web concepts a reality. Whether web app, website,
                single-page app let's get straight to the point... We will build
                your site and make sure it looks exactly how you like, or your
                money back.
              </h1>

              <hr />

              <h3 class="p-5 text-lg text-white italic text-right">
                - The CEO
              </h3>
            </div>
          </div>

          <div
            :class="
              darkMode ? 'text-white bg-slate-700' : 'bg-gray-50 text-slate-700'
            "
            class="flex flex-col w-full justify-between gap-5 rounded-2xl p-5 lg:w-1/2"
          >
            <h1
              :class="darkMode ? 'text-white' : 'text-slate-700'"
              class="text-3xl text-center text-white"
            >
              Our Team
            </h1>

            <div
              :class="darkMode ? 'text-white' : 'text-slate-700'"
              class="flex flex-col sm:flex-row justify-between rounded-2xl gap-5 overflow-x-auto"
            >
              <!-- holds a project -->
              <div
                v-for="(member, memberIndex) in team"
                :key="memberIndex"
                class="overflow-hidden flex-1 rounded-2xl border cursor-default"
                :class="[
                  `${rotatingColors[memberIndex % rotatingColors.length]} `,
                ]"
              >
                <div class="flex flex-col justify-between h-full">
                  <!-- header -->
                  <div class="flex flex-row justify-between border-b">
                    <div class="p-3">
                      {{ member.name }}
                    </div>
                    <a
                      :href="member.resume"
                      target="_blank"
                      class="hover:bg-sky-400 p-3"
                    >
                      View Portfolio
                    </a>
                  </div>
                  <!-- body -->
                  <div class="flex flex-row items-center p-3 flex-1">
                    <p class="block italic text-center">
                      {{ member.quote }}
                    </p>
                  </div>
                  <div class="flex flex-row justify-end p-3 border-t">
                    <p class="block">{{ member.role }}</p>
                  </div>
                  <!-- footer -->
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- if want to use right column later -->
      <div class=""></div>
    </div>
    <!-- app toolbar - footer -->
    <div
      :class="darkMode ? 'bg-slate-700' : 'bg-white'"
      class="fixed bottom-0 z-10 w-full flex flex-row justify-between items-center p-2"
    >
      <button
        @click="modalEmail = true"
        class="rounded-2xl border-none cursor-pointer text-white p-3 flex items-center text-center bg-red-500"
      >
        Email Us
      </button>
      <button
        @click="modalGetStarted = true"
        class="rounded-2xl border-none cursor-pointer text-white p-3 flex items-center text-center bg-emerald-500"
      >
        Get Started
      </button>
      <button
        @click="modalCall = true"
        class="rounded-2xl border-none cursor-pointer text-white p-3 flex items-center text-center bg-blue-500"
      >
        Call Now
      </button>
    </div>
  </div>
</template>
