import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


  gsap.registerPlugin(ScrollTrigger);

export function Section1() {

    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-visual_wall",
            start: "top 70%",
            end: "bottom top",
            scrub: true,
          },
        });
      
        tl.to(".hero-visual_me-img.after", {
          height: 0,
          ease: "power2.out",
          duration: 1.5,
        });
      
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      }, []);
      
      


    return (
        <>    
    <section data-w-id="c0306510-0a63-007b-db14-3129e20a4a87" className="  section hero">
                <div data-w-id="6a809cc7-ffc8-ad7d-4aea-8a541845a802" className="hero-wrap">
                    <div className="container hero">
                        <div data-w-id="582e7b64-bd28-dc3b-c9b9-1b439b4de35e"  className="hero-visual_wall opacity-100">
                            <div className="hero-visual">
                                <img src="https://cdn.prod.website-files.com/62c6f0db8f3bd1cd89369e11/6311e635f4c52fb8e6e1b2c5_fake-wf.svg" loading="lazy" alt="" className="hero-visual_wf"/>
                                <div className="hero-visual_wf-canvas">
                                    <div className="hero-visual_wf-funko">
                                        <img src="https://cdn.prod.website-files.com/62c6f0db8f3bd1cd89369e11/63681b1fbefaed5f8ffe5e7e_funko-tom_new.webp" loading="eager" alt="" className="hero-visual_wf-funko-img"/>
                                        <img src="https://cdn.prod.website-files.com/62c6f0db8f3bd1cd89369e11/6367d4ed0001037e5bf5fa8e_hero-shadow.webp" loading="lazy" alt="" className="hero-visual_wf-shadow"/>
                                    </div>
                                </div>
                                <div className="hero-visual_me">
                                    <img src="https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg" loading="eager" sizes="(max-width: 991px) 100vw, 530px" srcSet="https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 500w, https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 800w, https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpgp 1080w, https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 1400w" alt="" className="hero-visual_me-img before"/>
                                    <div className="hero-visual_me-img after"></div>
                                </div>
                                <div className="hero-visual_transition-box">
                                    <div data-is-ix2-target="1" className="hero-visual_transition" data-w-id="f2188aba-fcbc-3cc8-7dc8-07672ef47685" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/62c6f0db8f3bd1cd89369e11/6367e46643f4584666cc2c68_lf30_editor_wepwsxy3.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="2.0020019204587935" data-duration="0"></div>
                                </div>
                            </div>
                            <div className="hero-overlay"></div>
                        </div>
                        <div data-w-id="359013b7-bd60-84d0-d780-2da01d8df3bb" className="hero-content_wall">
                            <div id="tm-reveal_2" className="hero-content_part _2">
                                <div className="hero-content">
                                    <div className="hero-content_reveal-back">
                                        <div data-w-id="829ee307-42b0-9f9a-8032-b2b9332d087e" className="hero-content_back-button">
                                            <div className="hero-content_back-button_box">
                                                <div className="hero-content_back-button_arrow-box">
                                                    <div className="hero-content_back-button_arrow w-embed">
                                                        <svg width="100%" height="100%" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15519 9.84618C0.687855 9.37885 0.687855 8.62116 1.15519 8.15383L8.77078 0.538242C9.23811 0.0709115 9.9958 0.0709115 10.4631 0.538242C10.9305 1.00557 10.9305 1.76327 10.4631 2.2306L4.89039 7.80333L34.0014 7.80334V10.1967L4.89039 10.1967L10.4631 15.7694C10.9305 16.2368 10.9305 16.9944 10.4631 17.4618C9.9958 17.9291 9.2381 17.9291 8.77077 17.4618L1.15519 9.84618Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hero-content_back-button_arrow-box">
                                                    <div className="hero-content_back-button_arrow w-embed">
                                                        <svg width="100%" height="100%" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15519 9.84618C0.687855 9.37885 0.687855 8.62116 1.15519 8.15383L8.77078 0.538242C9.23811 0.0709115 9.9958 0.0709115 10.4631 0.538242C10.9305 1.00557 10.9305 1.76327 10.4631 2.2306L4.89039 7.80333L34.0014 7.80334V10.1967L4.89039 10.1967L10.4631 15.7694C10.9305 16.2368 10.9305 16.9944 10.4631 17.4618C9.9958 17.9291 9.2381 17.9291 8.77077 17.4618L1.15519 9.84618Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info-label">Back</div>
                                        </div>
                                    </div>
                                    <div className="hero-content_headline">
                                        <div className="h5 opacity_30">HI, I'M TOM, I develop</div>
                                        <h1 className="h2 hero-content_h margin-bot margin-16 no-actions">
                                            <strong>The Perfect Website</strong>
                                        </h1>
                                        <div className="hero_tm">
                                            <div tm-reveal="1" data-w-id="84974f5a-3d81-e442-532d-7913cea4b22e" className="tm_block">
                                                <div className="tm">
                                                    <div className="tm_label">TM</div>
                                                    <div className="tm_dot-bg"></div>
                                                    <div className="tm_dot-box solid">
                                                        <div className="tm_dot _1"></div>
                                                        <div className="tm_dot _2 solid"></div>
                                                        <div className="tm_dot _3"></div>
                                                    </div>
                                                    <div className="tm_dot-box stroke">
                                                        <div className="tm_dot _1 stroke"></div>
                                                        <div className="tm_dot _2 stroke"></div>
                                                    </div>
                                                </div>
                                                <div className="hero_click-me">
                                                    <div className="hero_click-me_arrow w-embed">
                                                        <svg width="100%" height="100%" viewBox="0 0 54 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.19964 10.2246C10.4533 10.1371 11.0633 10.9076 11.8652 11.2608C12.412 11.507 13.0131 11.7428 13.5861 11.7677C14.8148 11.8192 15.6244 10.3675 14.9578 9.37431C14.6145 8.88179 14.1766 8.41592 13.6914 8.06288C10.6359 5.85097 7.56036 3.64723 4.45286 1.47983C3.88851 1.07699 3.18226 0.813607 2.4889 0.638604C1.43766 0.363097 0.400658 1.20504 0.375987 2.25636C0.368605 2.55186 0.403745 2.8652 0.4448 3.16445C0.884957 6.08642 1.29085 9.0106 1.78537 11.9222C1.90048 12.6009 2.15498 13.305 2.51946 13.9059C3.21775 15.0617 4.45362 15.0166 5.1932 13.8508C5.39793 13.522 5.51528 13.1234 5.7699 12.517C6.24796 12.9665 6.5974 13.2459 6.89714 13.604C8.81362 15.8686 10.7159 18.1271 12.6123 20.3998C16.8453 25.4451 22.2873 28.8416 28.2169 31.5137C30.0698 32.3415 32.086 32.9392 34.0872 33.2155C37.2212 33.6522 40.3933 33.8394 43.5442 33.9183C47.0945 33.9989 50.0839 32.517 52.617 30.0969C53.0368 29.6926 53.4332 29.1457 53.5814 28.5941C53.6846 28.1896 53.5151 27.5212 53.2141 27.2455C52.9131 26.9698 52.2185 26.8772 51.8308 27.0462C51.1938 27.293 50.6214 27.7826 50.0586 28.2098C47.753 29.9292 45.1908 30.7113 42.3129 30.4983C39.3583 30.2696 36.3798 30.2963 33.4966 29.5004C27.1396 27.727 21.6939 24.3789 17.0955 19.7275C14.5897 17.199 12.4057 14.341 10.0797 11.6226C9.75749 11.2384 9.54762 10.7854 9.19964 10.2246Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div className="hero_click-me_text w-embed">
                                                        <svg width="100%" height="100%" viewBox="0 0 103 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.2886 2.26379C12.8112 2.26379 13.3806 2.73045 13.9966 3.66379C14.6126 4.57845 14.9206 5.33445 14.9206 5.93179C14.9206 6.52912 14.7992 6.82779 14.5566 6.82779C14.4446 6.82779 14.2019 6.79045 13.8286 6.71579C13.4739 6.64112 13.1659 6.60379 12.9046 6.60379C11.9712 6.60379 10.8792 7.20112 9.62856 8.39579C8.3779 9.59045 7.30456 11.0185 6.40856 12.6798C5.53123 14.3411 5.09256 15.7785 5.09256 16.9918C5.09256 17.5891 5.1859 18.0278 5.37256 18.3078C5.55923 18.5691 5.89523 18.6998 6.38056 18.6998C7.66856 18.6998 8.97523 18.5038 10.3006 18.1118C11.6259 17.7198 12.7179 17.3278 13.5766 16.9358C14.4352 16.5251 14.9206 16.3198 15.0326 16.3198C15.1632 16.3198 15.2846 16.4318 15.3966 16.6558C15.5272 16.8611 15.5926 17.1131 15.5926 17.4118C15.5926 18.0465 15.0886 18.8025 14.0806 19.6798C13.0726 20.5385 11.8499 21.2758 10.4126 21.8918C8.9939 22.5078 7.7059 22.8158 6.54856 22.8158C5.39123 22.8158 4.16856 22.1158 2.88056 20.7158C1.61123 19.3158 0.976562 17.9811 0.976562 16.7118C0.976562 14.9385 1.5459 12.9225 2.68456 10.6638C3.82323 8.38645 5.28856 6.41712 7.08056 4.75579C8.89123 3.09445 10.6272 2.26379 12.2886 2.26379Z" fill="currentColor" stroke="currentColor"></path>
                                                            <path d="M21.3658 0.555786C21.8138 0.555786 22.3925 0.966453 23.1018 1.78779C23.8111 2.60912 24.1658 3.39312 24.1658 4.13979C24.1658 4.88645 24.0538 6.22112 23.8298 8.14379C23.6058 10.0478 23.3725 11.5691 23.1298 12.7078C21.5805 19.4651 20.4978 22.8438 19.8818 22.8438C19.4711 22.8438 18.9578 22.5171 18.3418 21.8638C17.7445 21.1918 17.4458 20.6411 17.4458 20.2118C17.4458 20.1745 17.6978 19.2038 18.2018 17.2998C18.7058 15.3958 19.2098 12.9505 19.7138 9.96379C20.2365 6.95845 20.4978 4.09312 20.4978 1.36779C20.4978 0.826453 20.7871 0.555786 21.3658 0.555786Z" fill="currentColor" stroke="currentColor"></path>
                                                            <path d="M27.0393 4.89579C27.0393 4.41045 27.254 3.91579 27.6833 3.41179C28.1313 2.88912 28.5606 2.62779 28.9713 2.62779C29.4006 2.62779 29.9046 3.13179 30.4833 4.13979C31.062 5.14779 31.3513 5.88512 31.3513 6.35179C31.3513 6.79979 31.202 7.14512 30.9033 7.38779C30.6046 7.63045 30.2966 7.75179 29.9793 7.75179C29.438 7.75179 28.8126 7.39712 28.1033 6.68779C27.394 5.97845 27.0393 5.38112 27.0393 4.89579ZM27.4593 8.39579C28.1126 8.39579 28.6913 8.76912 29.1953 9.51579C29.718 10.2625 29.9793 10.9811 29.9793 11.6718C29.9793 12.0265 29.6526 13.3051 28.9993 15.5078C28.3646 17.6918 27.73 19.7638 27.0953 21.7238C26.8713 22.4518 26.414 22.8158 25.7233 22.8158C25.3126 22.8158 24.9486 22.6665 24.6313 22.3678C24.3326 22.0505 24.1833 21.6491 24.1833 21.1638C24.1833 20.6598 24.4166 19.4278 24.8833 17.4678C25.3686 15.4891 25.7326 13.8091 25.9753 12.4278C26.2366 11.0278 26.47 10.0105 26.6753 9.37579C26.8993 8.72245 27.1606 8.39579 27.4593 8.39579Z" fill="currentColor" stroke="currentColor"></path>
                                                            <path d="M31.0087 18.4478C31.0087 17.1411 31.4194 15.7038 32.2407 14.1358C33.0621 12.5678 34.1354 11.2238 35.4608 10.1038C36.8048 8.98379 38.1207 8.42379 39.4087 8.42379C40.0621 8.42379 40.7341 8.85312 41.4248 9.71179C42.1154 10.5518 42.4608 11.3078 42.4608 11.9798C42.4608 12.4651 42.2367 12.7078 41.7887 12.7078C41.5647 12.7078 41.2568 12.6051 40.8647 12.3998C40.4727 12.1945 40.0714 12.0918 39.6608 12.0918C39.2501 12.0918 38.6621 12.4465 37.8968 13.1558C37.1501 13.8465 36.4781 14.6865 35.8807 15.6758C35.3021 16.6465 35.0127 17.4118 35.0127 17.9718C35.0127 18.5318 35.1154 18.8958 35.3208 19.0638C35.5448 19.2318 36.0674 19.3158 36.8888 19.3158C37.7288 19.3158 38.4847 19.2411 39.1567 19.0918C39.8474 18.9425 40.3514 18.7931 40.6688 18.6438C41.0048 18.4758 41.3034 18.3918 41.5648 18.3918C42.0874 18.3918 42.3488 18.6158 42.3488 19.0638C42.3488 19.8851 41.6301 20.7251 40.1927 21.5838C38.7554 22.4238 37.3181 22.8438 35.8807 22.8438C34.9661 22.8438 33.9207 22.3398 32.7447 21.3318C31.5874 20.3051 31.0087 19.3438 31.0087 18.4478Z" fill="currentColor" stroke="currentColor"></path>
                                                            <path d="M46.752 22.8438C46.3226 22.8438 45.7813 22.4985 45.128 21.8078C44.4933 21.1171 44.176 20.5665 44.176 20.1558C44.176 20.0438 44.484 18.9331 45.1 16.8238C45.7346 14.7145 46.36 12.1758 46.976 9.20779C47.6106 6.23979 47.928 3.64512 47.928 1.42379C47.928 0.84512 48.1893 0.555786 48.712 0.555786C49.16 0.555786 49.748 0.966453 50.476 1.78779C51.2226 2.59045 51.596 3.34645 51.596 4.05579C51.596 5.08245 51.2226 7.02379 50.476 9.87979C49.748 12.7358 49.02 14.9851 48.292 16.6278C48.5346 16.3105 48.8613 15.8905 49.272 15.3678C49.7013 14.8265 50.0466 14.3878 50.308 14.0518C50.5693 13.7158 50.8866 13.3051 51.26 12.8198C51.652 12.3345 51.9786 11.9425 52.24 11.6438C52.5013 11.3265 52.7906 10.9811 53.108 10.6078C53.4253 10.2158 53.696 9.90779 53.92 9.68379C54.1626 9.44112 54.4053 9.21712 54.648 9.01179C55.096 8.60112 55.4413 8.39579 55.684 8.39579C56.1506 8.39579 56.664 8.71312 57.224 9.34779C57.784 9.96379 58.064 10.5051 58.064 10.9718C58.064 11.1585 57.6626 11.5878 56.86 12.2598C56.076 12.9318 55.2826 13.6785 54.48 14.4998C53.696 15.3211 53.304 16.0585 53.304 16.7118C53.304 17.3465 53.4906 17.9718 53.864 18.5878C54.256 19.1851 54.676 19.6425 55.124 19.9598C55.572 20.2771 55.9826 20.6038 56.356 20.9398C56.748 21.2571 56.944 21.5278 56.944 21.7518C56.944 22.4798 56.4493 22.8438 55.46 22.8438C54.284 22.8438 52.7253 21.8545 50.784 19.8758L50.112 19.2038C48.432 21.6305 47.312 22.8438 46.752 22.8438Z" fill="currentColor" stroke="currentColor"></path>
                                                            <path d="M86.454 8.39579C87.182 8.39579 87.7887 8.88112 88.274 9.85179C88.7593 10.8225 89.002 11.7091 89.002 12.5118C89.002 13.3145 88.8433 14.5091 88.526 16.0958C88.2273 17.6638 87.742 19.1851 87.07 20.6598C86.4167 22.1158 85.7073 22.8438 84.942 22.8438C84.326 22.8438 84.018 22.4238 84.018 21.5838C84.018 20.7438 84.2607 19.3718 84.746 17.4678C85.2313 15.5638 85.474 14.3131 85.474 13.7158C85.474 13.1185 85.3807 12.8198 85.194 12.8198C84.802 12.8198 84.3353 13.2491 83.794 14.1078C83.2527 14.9665 82.5993 16.1145 81.834 17.5518C81.0873 18.9891 80.6207 19.9131 80.434 20.3238C80.2473 20.7345 80.0887 21.0611 79.958 21.3038C79.846 21.5465 79.7153 21.7985 79.566 22.0598C78.9687 23.0491 78.1753 23.0491 77.186 22.0598C76.682 21.5558 76.43 21.0985 76.43 20.6878C76.43 20.6131 76.5793 19.9038 76.878 18.5598C77.1953 17.1971 77.354 15.6478 77.354 13.9118C77.354 13.1838 77.27 12.8198 77.102 12.8198C76.878 12.8198 76.6167 13.0438 76.318 13.4918C76.0193 13.9398 75.562 14.7518 74.946 15.9278C74.33 17.1038 73.798 18.0745 73.35 18.8398C71.782 21.5091 70.5873 22.8438 69.766 22.8438C69.3553 22.8438 68.842 22.4985 68.226 21.8078C67.6287 21.1171 67.33 20.5945 67.33 20.2398C67.33 19.8665 67.5353 18.9891 67.946 17.6078C68.3753 16.2078 68.646 14.7238 68.758 13.1558C68.8887 11.5878 69.0007 10.3651 69.094 9.48779C69.206 8.61045 69.43 8.17179 69.766 8.17179C70.4753 8.17179 71.1567 8.47045 71.81 9.06779C72.482 9.64645 72.818 10.1785 72.818 10.6638C72.818 11.7651 72.4167 13.6878 71.614 16.4318C72.9207 13.3145 74.022 11.2051 74.918 10.1038C75.87 8.96512 76.7847 8.39579 77.662 8.39579C78.1473 8.39579 78.7447 8.84379 79.454 9.73979C80.182 10.6358 80.546 11.4758 80.546 12.2598C80.546 13.0251 80.5367 13.6971 80.518 14.2758C81.0967 12.8198 81.974 11.4758 83.15 10.2438C84.326 9.01179 85.4273 8.39579 86.454 8.39579Z" fill="currentColor" stroke="currentColor"></path>
                                                            <path d="M102.535 13.6318C102.535 14.5465 101.91 15.3678 100.659 16.0958C99.4274 16.8238 98.1581 17.1878 96.8514 17.1878C95.5447 17.1878 94.4714 17.0945 93.6314 16.9078C93.4634 17.4118 93.3794 17.9158 93.3794 18.4198C93.3794 18.9238 93.4634 19.2878 93.6314 19.5118C93.7994 19.7171 94.2194 19.8198 94.8914 19.8198C96.2914 19.8198 97.4861 19.6891 98.4754 19.4278C99.4834 19.1665 100.006 19.0358 100.043 19.0358C100.809 19.0358 101.191 19.2878 101.191 19.7918C101.191 20.5198 100.585 21.2105 99.3714 21.8638C98.1767 22.5171 96.7861 22.8438 95.1994 22.8438C93.6314 22.8438 92.3714 22.3491 91.4194 21.3598C90.4674 20.3705 89.9914 19.2038 89.9914 17.8598C89.9914 16.4971 90.3834 15.0785 91.1674 13.6038C91.9701 12.1291 92.9687 10.8971 94.1634 9.90779C95.3581 8.89979 96.5434 8.39579 97.7194 8.39579C98.9141 8.39579 100.015 8.98379 101.023 10.1598C102.031 11.3171 102.535 12.4745 102.535 13.6318ZM99.2874 13.1838C99.2874 12.9971 99.0914 12.7265 98.6994 12.3718C98.3074 12.0171 97.9341 11.8398 97.5794 11.8398C97.2434 11.8398 96.8047 12.0918 96.2634 12.5958C95.7221 13.0811 95.2087 13.7158 94.7234 14.4998C94.8914 14.5185 95.1341 14.5278 95.4514 14.5278C98.0087 14.5278 99.2874 14.0798 99.2874 13.1838Z" fill="currentColor" stroke="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hero-content_subheadline-row">
                                        <div className="h5 hero-content_subheadline base">for your business</div>
                                        <div className="h5 hero-content_subheadline reveal">By Tomas Mrazek</div>
                                    </div>
                                    <div className="hero-content_reveal">
                                        <div className="tm-reveal">
                                            <div className="tm_label">TM</div>
                                            <div className="tm_dot-box stroke">
                                                <div className="tm_dot _1 stroke"></div>
                                            </div>
                                        </div>
                                        <p className="hero-content_reveal-text">I strive to elevate your website to a level that is easily editable, always fully functional, and pixel-perfect according to your needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tm-reveal_4" className="hero-content_part _3">
                                <div className="hero-content_me-respo">
                                    <img src="https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 900px, 100vw" srcSet="https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 500w, https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 800w, https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 1080w, https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 1400w" alt="" className="hero-content_me-respo-img"/>
                                </div>
                                <div className="hero-content">
                                    <div className="hero-content_reveal-back">
                                        <div data-w-id="829ee307-42b0-9f9a-8032-b2b9332d087e" className="hero-content_back-button">
                                            <div className="hero-content_back-button_box">
                                                <div className="hero-content_back-button_arrow-box">
                                                    <div className="hero-content_back-button_arrow w-embed">
                                                        <svg width="100%" height="100%" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15519 9.84618C0.687855 9.37885 0.687855 8.62116 1.15519 8.15383L8.77078 0.538242C9.23811 0.0709115 9.9958 0.0709115 10.4631 0.538242C10.9305 1.00557 10.9305 1.76327 10.4631 2.2306L4.89039 7.80333L34.0014 7.80334V10.1967L4.89039 10.1967L10.4631 15.7694C10.9305 16.2368 10.9305 16.9944 10.4631 17.4618C9.9958 17.9291 9.2381 17.9291 8.77077 17.4618L1.15519 9.84618Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hero-content_back-button_arrow-box">
                                                    <div className="hero-content_back-button_arrow w-embed">
                                                        <svg width="100%" height="100%" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15519 9.84618C0.687855 9.37885 0.687855 8.62116 1.15519 8.15383L8.77078 0.538242C9.23811 0.0709115 9.9958 0.0709115 10.4631 0.538242C10.9305 1.00557 10.9305 1.76327 10.4631 2.2306L4.89039 7.80333L34.0014 7.80334V10.1967L4.89039 10.1967L10.4631 15.7694C10.9305 16.2368 10.9305 16.9944 10.4631 17.4618C9.9958 17.9291 9.2381 17.9291 8.77077 17.4618L1.15519 9.84618Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info-label">Back</div>
                                        </div>
                                    </div>
                                    <div className="h5">I’m a certified</div>
                                    <div className="hero-content_headline">
                                        <h2 className="h2 hero-content_h margin-bot margin-16 no-actions">Webflow Partner</h2>
                                        <div tm-reveal="4" data-w-id="d156e0ad-bc1f-3393-021d-235451c60c36" className="tm_block _4">
                                            <div className="tm">
                                                <div className="tm_label">TM</div>
                                                <div className="tm_dot-bg"></div>
                                                <div className="tm_dot-box solid">
                                                    <div className="tm_dot _1"></div>
                                                    <div className="tm_dot _2 solid"></div>
                                                    <div className="tm_dot _3"></div>
                                                </div>
                                                <div className="tm_dot-box stroke">
                                                    <div className="tm_dot _1 stroke"></div>
                                                    <div className="tm_dot _2 stroke"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hero-content_subheadline-row">
                                        <div className="h5 hero-content_subheadline base">by day</div>
                                        <div className="h5 hero-content_subheadline reveal">By Tomas Mrazek</div>
                                    </div>
                                    <div className="hero-content_reveal">
                                        <div className="tm-reveal">
                                            <div className="tm_label">TM</div>
                                            <div className="tm_dot-box stroke">
                                                <div className="tm_dot _1 stroke"></div>
                                            </div>
                                        </div>
                                        <p className="hero-content_reveal-text">As your savior, I &#x27;m happy to show you what it &#x27;s like to have a website that serves you and does the job it &#x27;s supposed to.</p>
                                    </div>
                                </div>
                                <p className="hero_p">Every website deserves a unique solution, whether it &#x27;s advanced custom functionalities, a need for adequately set design systems for the simple creation of landing pages, or special custom animated projects.</p>
                            </div>
                            <div id="tm-reveal_1" className="hero-content_part _1">
                                <div className="hero-content">
                                    <div className="hero-content_reveal-back">
                                        <div data-w-id="829ee307-42b0-9f9a-8032-b2b9332d087e" className="hero-content_back-button">
                                            <div className="hero-content_back-button_box">
                                                <div className="hero-content_back-button_arrow-box">
                                                    <div className="hero-content_back-button_arrow w-embed">
                                                        <svg width="100%" height="100%" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15519 9.84618C0.687855 9.37885 0.687855 8.62116 1.15519 8.15383L8.77078 0.538242C9.23811 0.0709115 9.9958 0.0709115 10.4631 0.538242C10.9305 1.00557 10.9305 1.76327 10.4631 2.2306L4.89039 7.80333L34.0014 7.80334V10.1967L4.89039 10.1967L10.4631 15.7694C10.9305 16.2368 10.9305 16.9944 10.4631 17.4618C9.9958 17.9291 9.2381 17.9291 8.77077 17.4618L1.15519 9.84618Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hero-content_back-button_arrow-box">
                                                    <div className="hero-content_back-button_arrow w-embed">
                                                        <svg width="100%" height="100%" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15519 9.84618C0.687855 9.37885 0.687855 8.62116 1.15519 8.15383L8.77078 0.538242C9.23811 0.0709115 9.9958 0.0709115 10.4631 0.538242C10.9305 1.00557 10.9305 1.76327 10.4631 2.2306L4.89039 7.80333L34.0014 7.80334V10.1967L4.89039 10.1967L10.4631 15.7694C10.9305 16.2368 10.9305 16.9944 10.4631 17.4618C9.9958 17.9291 9.2381 17.9291 8.77077 17.4618L1.15519 9.84618Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info-label">Back</div>
                                        </div>
                                    </div>
                                    <div className="h5">and your</div>
                                    <div className="hero-content_headline">
                                        <h2 className="h2 hero-content_h margin-bot margin-16 no-actions">
                                            Website <br/>Saviour
                                        </h2>
                                        <div tm-reveal="2" data-w-id="ce1cc6fb-5114-9669-55cf-23f799e399f8" className="tm_block _2">
                                            <div className="tm">
                                                <div className="tm_label">TM</div>
                                                <div className="tm_dot-bg"></div>
                                                <div className="tm_dot-box solid">
                                                    <div className="tm_dot _1"></div>
                                                    <div className="tm_dot _2 solid"></div>
                                                    <div className="tm_dot _3"></div>
                                                </div>
                                                <div className="tm_dot-box stroke">
                                                    <div className="tm_dot _1 stroke"></div>
                                                    <div className="tm_dot _2 stroke"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hero-content_subheadline-row">
                                        <div className="h5 hero-content_subheadline base">by night</div>
                                        <div className="h5 hero-content_subheadline reveal">By Tomas Mrazek</div>
                                    </div>
                                    <div className="hero-content_reveal">
                                        <div className="tm-reveal">
                                            <div className="tm_label">TM</div>
                                            <div className="tm_dot-box stroke">
                                                <div className="tm_dot _1 stroke"></div>
                                            </div>
                                        </div>
                                        <p className="hero-content_reveal-text">As an official Webflow Partner, I am entirely focusing on building sites in Webflow with systematic build via reusable components in mind, recently enjoying advanced functionalities and custom-made animations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    </>

    )
}
