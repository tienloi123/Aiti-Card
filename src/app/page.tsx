import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white text-center max-h-full overflow-auto">
      {/* Avatar */}
      <div className="mt-7">
        <Image
          src="/image.jpg"
          alt="Tiến sĩ Kiều My"
          width={164}
          height={164}
          className="rounded-full"
        />
      </div>
      <h1 className="text-[40px] font-bold text-[#122742] mt-[35px]">
        Tiến sĩ{" "}
        <span className="text-[#032A94] font-bold text-[40px]">Kiều My</span>
      </h1>
      {/* Position */}
      <div className="h-[72px]">
        <p className="text-[#122742] text-[24px] font-semibold">Viện trưởng</p>
        <p className="text-[18px] text-[#122742] font-medium">
          Viện Công nghệ AI & Chuyển đổi số (AITI)
        </p>
      </div>

      {/* Contact buttons */}
      <div className="mt-[25px] w-[68dvw] flex flex-col gap-3.5">
        <a
          href="tel:0888881081"
          className="flex items-center justify-center bg-[#032A94] text-white px-4 py-2 rounded-lg space-x-2 h-12"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.98356 7.3777C7.56356 8.58572 8.35422 9.71792 9.35553 10.7192C10.3568 11.7206 11.4891 12.5112 12.6971 13.0912C12.801 13.1411 12.8529 13.166 12.9187 13.1852C13.1523 13.2533 13.4392 13.2044 13.637 13.0627C13.6927 13.0228 13.7403 12.9752 13.8356 12.88C14.1269 12.5886 14.2726 12.4429 14.4191 12.3477C14.9715 11.9885 15.6837 11.9885 16.2361 12.3477C16.3825 12.4429 16.5282 12.5886 16.8196 12.88L16.9819 13.0423C17.4248 13.4852 17.6462 13.7066 17.7665 13.9445C18.0058 14.4174 18.0058 14.976 17.7665 15.449C17.6462 15.6868 17.4248 15.9082 16.9819 16.3511L16.8506 16.4824C16.4092 16.9238 16.1886 17.1445 15.8885 17.313C15.5556 17.5 15.0385 17.6345 14.6567 17.6334C14.3126 17.6323 14.0774 17.5656 13.607 17.4321C11.0792 16.7146 8.69387 15.3609 6.70388 13.3709C4.7139 11.3809 3.36017 8.9956 2.6427 6.46777C2.50919 5.9974 2.44244 5.76221 2.44141 5.41809C2.44028 5.03624 2.57475 4.51916 2.76176 4.18624C2.9303 3.88621 3.15098 3.66554 3.59233 3.22419L3.72369 3.09282C4.16656 2.64996 4.388 2.42852 4.62581 2.30823C5.09878 2.06901 5.65734 2.06901 6.1303 2.30823C6.36812 2.42852 6.58955 2.64995 7.03242 3.09282L7.19481 3.25521C7.48615 3.54655 7.63182 3.69222 7.72706 3.8387C8.08622 4.39111 8.08622 5.10326 7.72706 5.65567C7.63182 5.80215 7.48615 5.94782 7.19481 6.23916C7.09955 6.33442 7.05192 6.38205 7.01206 6.43773C6.87038 6.63559 6.82146 6.92247 6.88957 7.1561C6.90873 7.22184 6.93367 7.27379 6.98356 7.3777Z"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="font-semibold text-[20px] leading-6">
            088.888.1081
          </span>
        </a>

        <a
          href="https://aiti.vn/card/kieumy"
          className="flex items-center justify-center bg-[#032A94] text-white px-4 py-2 rounded-lg space-x-2 h-12"
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0897 15.3033L9.91116 16.4818C8.28398 18.109 5.64579 18.109 4.01861 16.4818C2.39142 14.8546 2.39142 12.2164 4.01861 10.5892L5.19712 9.41071M15.8037 10.5892L16.9822 9.41071C18.6094 7.78352 18.6094 5.14533 16.9822 3.51815C15.355 1.89096 12.7169 1.89096 11.0897 3.51815L9.91116 4.69666M7.58375 12.9166L13.4171 7.08328"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="font-semibold text-[20px] leading-6">
            aiti.vn/card/kieumy
          </span>
        </a>

        <a
          href="mailto:tskieumy@gmail.com"
          className="flex items-center justify-center bg-[#032A94] text-white px-4 py-2 rounded-lg space-x-2 h-12"
        >
          <div className="w-[20px] h-[20px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9166 15L12.3809 10M7.61901 10L2.08332 15M1.66663 5.83334L8.47073 10.5962C9.0217 10.9819 9.29719 11.1747 9.59685 11.2494C9.86154 11.3154 10.1384 11.3154 10.4031 11.2494C10.7027 11.1747 10.9782 10.9819 11.5292 10.5962L18.3333 5.83334M5.66663 16.6667H14.3333C15.7334 16.6667 16.4335 16.6667 16.9683 16.3942C17.4387 16.1545 17.8211 15.7721 18.0608 15.3017C18.3333 14.7669 18.3333 14.0668 18.3333 12.6667V7.33334C18.3333 5.93321 18.3333 5.23315 18.0608 4.69837C17.8211 4.22796 17.4387 3.84551 16.9683 3.60583C16.4335 3.33334 15.7334 3.33334 14.3333 3.33334H5.66663C4.26649 3.33334 3.56643 3.33334 3.03165 3.60583C2.56124 3.84551 2.17879 4.22796 1.93911 4.69837C1.66663 5.23315 1.66663 5.93321 1.66663 7.33334V12.6667C1.66663 14.0668 1.66663 14.7669 1.93911 15.3017C2.17879 15.7721 2.56124 16.1545 3.03165 16.3942C3.56643 16.6667 4.26649 16.6667 5.66663 16.6667Z"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="font-semibold text-[20px] leading-6">
            tskieumy@gmail.com
          </span>
        </a>
      </div>

      <div className="w-[143px] h-[153px] bg-[#D9D9D9] mt-[21px] mb-[49px]"></div>
    </div>
  );
}
