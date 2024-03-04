import PropTypes from 'prop-types';

ArosajeLogoBG.propTypes = {
  size: PropTypes.string
};

export default function ArosajeLogoBG({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || '712'} height={size || '712'} viewBox="0 0 712 712">
      <path
        d="M0 0 C234.96 0 469.92 0 712 0 C712 234.96 712 469.92 712 712 C477.04 712 242.08 712 0 712 C0 477.04 0 242.08 0 0 Z "
        fill="#F7F8F8"
        transform="translate(0,0)"
      />
      <path
        d="M0 0 C0.66 0 1.32 0 2 0 C2.25563061 7.08664846 1.68477241 13.6935842 0.50390625 20.6796875 C0.00613267 23.95959093 -0.28071078 27.19072624 -0.5 30.5 C-0.87567068 35.98347372 -1.58403458 41.34308691 -2.47265625 46.765625 C-2.81681389 48.87645855 -3.1382152 50.99116484 -3.43359375 53.109375 C-7.23866215 80.18260505 -15.41410205 109.2571313 -34 130 C-34.69738281 130.81597656 -35.39476562 131.63195312 -36.11328125 132.47265625 C-57.55394097 157.11227764 -88.52787293 172.89524312 -121 177 C-128.99846675 177.49732621 -136.99779257 177.34247003 -145 177 C-141.12478688 172.41848836 -137.15621822 167.94929274 -133.0625 163.5625 C-129.86835152 160.12302223 -126.68595503 156.68443117 -123.625 153.125 C-118.54740297 147.26435186 -113.1866606 141.65847908 -107.87841797 136.0078125 C-106.12964809 134.13857888 -104.3930641 132.25892936 -102.66015625 130.375 C-91.82939482 118.66334072 -80.51062632 107.44633547 -69.18212891 96.21899414 C-68.49942429 95.5405545 -67.81671967 94.86211487 -67.11332703 94.16311646 C-65.83220774 92.89017079 -64.54901807 91.61930361 -63.26325989 90.3510437 C-59.5210709 86.62955206 -55.99246581 82.77690407 -52.54258728 78.78309631 C-50.82157662 76.79375813 -49.05292607 74.85645447 -47.25390625 72.9375 C-46.3402832 71.96103516 -46.3402832 71.96103516 -45.40820312 70.96484375 C-44.49458008 69.99224609 -44.49458008 69.99224609 -43.5625 69 C-42.92634766 68.32066406 -42.29019531 67.64132813 -41.63476562 66.94140625 C-40.09100246 65.2931779 -38.54607458 63.64605985 -37 62 C-39.45145704 63.83240223 -41.89239634 65.6780371 -44.328125 67.53125 C-51.01224535 72.59917396 -57.73198485 77.56006139 -64.6875 82.25 C-73.95571377 88.51963992 -82.78682536 95.35199746 -91.64257812 102.18603516 C-93.66553512 103.74263939 -95.69618621 105.28765967 -97.734375 106.82421875 C-109.87597113 115.99217876 -121.01805707 125.83902334 -131.8125 136.5625 C-132.68390625 137.42464111 -133.5553125 138.28678223 -134.453125 139.17504883 C-140.39000676 145.14073395 -145.77222266 151.40828227 -151 158 C-151.85506776 159.04590087 -152.71044225 160.09155123 -153.56640625 161.13671875 C-182.10766917 197.60921324 -184.22823401 252.6255875 -185 297 C-184.34 297 -183.68 297 -183 297 C-182.81179688 295.84242188 -182.62359375 294.68484375 -182.4296875 293.4921875 C-180.75038316 285.98660563 -177.32025567 279.08153698 -174.125 272.125 C-173.79052856 271.39244995 -173.45605713 270.6598999 -173.1114502 269.90515137 C-165.12548491 252.48979063 -155.79912107 237.29538483 -143 223 C-142.10109915 221.88292876 -141.20394143 220.76445242 -140.30859375 219.64453125 C-139.54675781 218.77183594 -138.78492188 217.89914062 -138 217 C-137.34 217 -136.68 217 -136 217 C-136 216.34 -136 215.68 -136 215 C-135.34 215 -134.68 215 -134 215 C-133.67 214.01 -133.34 213.02 -133 212 C-130.0260502 209.22469189 -126.79692196 206.76813464 -123.59570312 204.26025391 C-122.06415366 203.05066726 -120.55492777 201.81297638 -119.046875 200.57421875 C-95.50087699 181.64685881 -64.4463928 166.78049867 -34.5234375 162.39453125 C-32.1126253 162.07532869 -32.1126253 162.07532869 -30.28100586 161.48803711 C-9.04236171 156.94388109 16.81256832 161.49016123 37.68359375 165.7578125 C60.55474684 170.40768614 81.71859149 173.40988486 105 169 C103.33081041 172.54319627 101.36309262 174.86522654 98.625 177.6875 C89.51675187 187.4066468 82.44111812 198.79339351 75.125 209.875 C66.27409886 223.26324956 57.03607102 236.31867483 46 248 C44.84870242 249.32861796 43.70270122 250.66184718 42.5625 252 C15.21116126 283.16926016 -24.68324413 302.73402795 -66 306 C-81.57700623 306.69491002 -96.70979239 306.06983598 -112 303 C-113.11060791 302.7831958 -113.11060791 302.7831958 -114.24365234 302.56201172 C-124.92479502 300.42672905 -134.9102226 297.07393435 -145 293 C-143.51354906 288.54064717 -140.30240794 286.92635655 -136.5625 284.25 C-135.77262695 283.68434326 -134.98275391 283.11868652 -134.16894531 282.53588867 C-109.2876084 265.11087139 -81.98178959 253.41084624 -53.93554688 242.17626953 C-51.45991908 241.18428893 -48.98691029 240.18632527 -46.515625 239.18359375 C-36.71655244 235.22468574 -26.82214095 231.52835752 -16.91308594 227.85595703 C11.46230475 217.42793168 11.46230475 217.42793168 39 205 C-2.31930174 211.30825769 -2.31930174 211.30825769 -42.87890625 221.05859375 C-46.08634355 222.02604355 -49.30980112 222.82393441 -52.5625 223.625 C-89.10771333 233.41592943 -125.12234476 248.67587208 -152 276 C-152.56203125 276.55300781 -153.1240625 277.10601562 -153.703125 277.67578125 C-159.87607085 284.20725679 -163.86531201 292.09737781 -168 300 C-168.49757813 300.93972656 -168.99515625 301.87945312 -169.5078125 302.84765625 C-179.18661605 322.54006473 -181.22133983 345.14778308 -181.0625 366.75 C-181.05573242 368.52890625 -181.05573242 368.52890625 -181.04882812 370.34375 C-181.03719316 373.22922228 -181.0208484 376.11458213 -181 379 C-175.75575392 381.49540334 -171.01884195 382.70807621 -165.28515625 383.5 C-164.47058456 383.62181641 -163.65601288 383.74363281 -162.8167572 383.86914062 C-160.23323973 384.25513032 -157.64820841 384.6289913 -155.0625 385 C-151.65595362 385.48979268 -148.25146466 385.99156927 -144.84765625 386.5 C-144.0797023 386.60634766 -143.31174835 386.71269531 -142.52052307 386.82226562 C-137.34382869 387.59579589 -132.84919826 389.02171669 -128 391 C-128.0625 393.25 -128.0625 393.25 -129 396 C-137.6935011 402.20964364 -146.89410629 402.34110744 -157.25 402.3125 C-158.97669922 402.33666992 -158.97669922 402.33666992 -160.73828125 402.36132812 C-170.88600358 402.36704837 -180.04293247 400.69243355 -189.25 396.3125 C-195.43423007 393.67699263 -199.38099906 392.65754972 -205.76953125 395.02734375 C-207.72304666 395.85238428 -209.66260476 396.71177346 -211.58203125 397.61328125 C-220.94759099 401.41302263 -229.4881889 402.47658969 -239.5625 402.375 C-241.2940332 402.39240234 -241.2940332 402.39240234 -243.06054688 402.41015625 C-251.87407081 402.38016127 -259.95997056 401.6994037 -267 396 C-266.68896484 394.13232422 -266.68896484 394.13232422 -266 392 C-258.69264194 386.88296115 -249.99698269 386.72845914 -241.375 385.875 C-239.15495184 385.64138741 -236.93540679 385.40337816 -234.71588135 385.16485596 C-233.26307257 385.0090231 -231.81006969 384.85498856 -230.35687256 384.70281982 C-223.5439415 383.98040969 -216.77398364 383.02668822 -210 382 C-210.89335064 339.82368162 -212.96295402 299.45594967 -245 268 C-268.48735919 245.52322451 -300.66453873 233.0058094 -331 223 C-331.80308594 222.73106934 -332.60617187 222.46213867 -333.43359375 222.18505859 C-362.51144228 212.56135781 -393.70031917 208.71595832 -424 205 C-423.175783 205.31707916 -423.175783 205.31707916 -422.33491516 205.64056396 C-370.56850568 225.56268028 -370.56850568 225.56268028 -346 236 C-344.57106031 236.60423281 -343.14201866 237.20822453 -341.71289062 237.81201172 C-282.58587619 262.80991242 -282.58587619 262.80991242 -258.81640625 279.99609375 C-254.98026838 282.72555107 -250.97887975 285.15825088 -246.94921875 287.58984375 C-246.30597656 288.05519531 -245.66273438 288.52054687 -245 289 C-245 289.66 -245 290.32 -245 291 C-257.11329004 296.41203535 -269.06172533 300.9959556 -282 304 C-283.55267578 304.36931641 -283.55267578 304.36931641 -285.13671875 304.74609375 C-302.62209277 308.13111275 -321.68992857 306.78796397 -339 303 C-339.78568359 302.82839355 -340.57136719 302.65678711 -341.38085938 302.47998047 C-364.77428232 297.18951154 -386.31383139 287.09475181 -405 272 C-405.85078125 271.35160156 -406.7015625 270.70320313 -407.578125 270.03515625 C-421.45243073 259.21402858 -433.7027843 246.2399455 -444 232 C-444.48275391 231.33500488 -444.96550781 230.67000977 -445.46289062 229.98486328 C-450.36636202 223.19774129 -455.14682423 216.33654897 -459.73608398 209.33300781 C-468.02969652 196.67939211 -477.28666137 184.76802764 -487.171875 173.3203125 C-489 171 -489 171 -490 168 C-489.15501953 168.44472656 -489.15501953 168.44472656 -488.29296875 168.8984375 C-471.72779343 176.85649447 -454.2073454 172.60158818 -437.20410156 168.71875 C-428.70754215 166.81278605 -420.15699556 165.15147715 -411.60693359 163.50488281 C-409.50226556 163.09727338 -407.40094129 162.67242092 -405.30078125 162.2421875 C-392.72046501 160.00077607 -379.72028246 160.7728521 -367 161 C-365.7315625 161.01305176 -365.7315625 161.01305176 -364.4375 161.02636719 C-325.12976615 161.52809442 -287.9684286 180.16203184 -260 207 C-259.45021484 207.50805176 -258.90042969 208.01610352 -258.33398438 208.53955078 C-247.79206749 218.29733475 -239.54410031 228.78876527 -232 241 C-231.56381348 241.70398926 -231.12762695 242.40797852 -230.67822266 243.13330078 C-222.02903112 257.34629973 -215.62842154 272.77558867 -209 288 C-208.06833913 239.40974916 -220.08765636 180.50049563 -253 143 C-254.23736444 141.50034633 -255.47469776 140.00066683 -256.71142578 138.50048828 C-266.63895138 126.55660223 -277.48595322 115.43663757 -288.4375 104.4375 C-289.1704126 103.69991455 -289.9033252 102.9623291 -290.65844727 102.20239258 C-294.73434937 98.13852334 -298.91190173 94.25837679 -303.26977539 90.4987793 C-309.99843977 84.67018178 -315.57796236 78.03711268 -321 71 C-319.48997137 74.41125639 -317.48673079 76.92684516 -315.0625 79.75 C-309.70246902 86.20093472 -305.06587352 93.06826397 -300.36425781 100.00537109 C-298.2642755 103.07567452 -296.10615628 106.10296894 -293.9375 109.125 C-293.32358398 109.98146118 -293.32358398 109.98146118 -292.69726562 110.85522461 C-291.46604059 112.57101352 -290.23330982 114.28570915 -289 116 C-256.21354167 161.57291667 -256.21354167 161.57291667 -250 174 C-279.89783936 171.70543501 -305.43388479 158.79301913 -325 136 C-353.76118726 100.05334487 -359.41316976 50.39279576 -359 6 C-358.34 6 -357.68 6 -357 6 C-355.625 7.58203125 -355.625 7.58203125 -354 9.8125 C-340.47720716 27.573364 -324.06074186 37.73350897 -304.92041016 48.39379883 C-284.47607145 59.79903137 -265.90013359 72.18915875 -251.5625 91.0625 C-250.72054077 92.16742798 -250.72054077 92.16742798 -249.86157227 93.29467773 C-244.92399263 99.89113642 -240.82365634 106.70461588 -237 114 C-236.60554687 114.71027344 -236.21109375 115.42054688 -235.8046875 116.15234375 C-228.16240937 130.38383018 -225.21467962 145.01964341 -226 161 C-226.23066162 161.76280273 -226.46132324 162.52560547 -226.69897461 163.31152344 C-227.12522217 167.11836705 -225.79060256 169.08236393 -223.984375 172.43359375 C-223.30749621 173.72132097 -222.63116952 175.00933851 -221.95532227 176.29760742 C-221.59511993 176.97246185 -221.2349176 177.64731628 -220.86380005 178.34262085 C-214.57803701 190.1651324 -209.07422429 202.07838695 -204.5625 214.6875 C-204.33212036 215.32742889 -204.10174072 215.96735779 -203.86437988 216.62667847 C-199.982622 227.47362237 -199.982622 227.47362237 -199 233 C-198.34 233 -197.68 233 -197 233 C-196.72534912 231.71633545 -196.45069824 230.4326709 -196.16772461 229.11010742 C-192.61189458 213.1430536 -187.36054826 197.59996746 -181.9375 182.1875 C-181.61463013 181.26578003 -181.29176025 180.34406006 -180.95910645 179.39440918 C-158.01590821 114.03620546 -158.01590821 114.03620546 -140 90 C-139.28457031 89.04351562 -138.56914062 88.08703125 -137.83203125 87.1015625 C-117.25980464 60.94598113 -91.00931104 46.48335332 -60.02734375 35.83789062 C-52.91072384 33.36941527 -45.88245383 30.69997422 -38.875 27.9375 C-37.84439453 27.53813232 -36.81378906 27.13876465 -35.75195312 26.72729492 C-21.72843863 21.13631717 -10.90186283 13.1818645 -1.375 1.43359375 C-0.694375 0.72396484 -0.694375 0.72396484 0 0 Z "
        fill="#68944B"
        transform="translate(552,112)"
      />
      <path
        d="M0 0 C4.62436981 0.4132519 8.95898567 1.53208071 13.41162109 2.81152344 C14.37237549 3.08399902 15.33312988 3.35647461 16.32299805 3.63720703 C33.37087309 8.63147405 47.49359734 16.89441725 62.13598633 26.84570312 C66.30486593 29.67067047 70.3894465 32.25429278 74.97412109 34.37402344 C75.93705078 34.83035156 76.89998047 35.28667969 77.89208984 35.75683594 C87.95095931 39.87929999 98.48075363 41.95688098 109.22412109 43.24902344 C110.50746338 43.41072021 111.79080566 43.57241699 113.11303711 43.73901367 C127.77514141 45.53199146 142.51248694 46.65725827 157.23950195 47.76660156 C168.27148233 48.62082913 178.9644882 49.89757416 189.78662109 52.24902344 C189.78662109 52.57902344 189.78662109 52.90902344 189.78662109 53.24902344 C188.4814151 53.28327675 188.4814151 53.28327675 187.14984131 53.31822205 C178.85610063 53.5363024 170.56242484 53.75668749 162.26881027 53.97951412 C158.00736314 54.09393011 153.74589778 54.20752603 149.484375 54.3190918 C115.18284448 55.16324269 115.18284448 55.16324269 80.97412109 57.68652344 C78.8942331 57.88902543 76.81418319 58.08980305 74.7341156 58.29045105 C73.3578975 58.42326288 71.98172672 58.55656607 70.60560608 58.69038391 C63.68342524 59.36196277 56.75572814 59.96135857 49.82568359 60.54516602 C45.3258047 60.92783352 40.83240587 61.33993014 36.34130859 61.81542969 C25.1045153 62.99349696 14.08444969 63.49732736 2.78662109 63.24902344 C8.8352865 70.57723303 22.70971766 71.15045642 31.56787109 72.33105469 C32.76198608 72.49563675 33.95610107 72.66021881 35.18640137 72.82978821 C49.15051438 74.67620562 63.17429813 75.74722407 77.21691895 76.78320312 C82.10064301 77.1449818 86.9834645 77.51867885 91.86608887 77.89497375 C94.4433322 78.09275706 97.02088036 78.28661907 99.59875488 78.47599792 C100.74936401 78.56311539 101.89997314 78.65023285 103.08544922 78.73999023 C104.59757996 78.85179878 104.59757996 78.85179878 106.14025879 78.96586609 C108.4513395 79.21314874 110.55574564 79.61358014 112.78662109 80.24902344 C112.78662109 81.23902344 112.78662109 82.22902344 112.78662109 83.24902344 C84.30769787 87.65327263 55.6340581 90.06111871 26.91162109 92.24902344 C4.05116462 94.00859188 -18.83875963 96.26024845 -41.46118164 100.02978516 C-42.4222583 100.18979004 -43.38333496 100.34979492 -44.37353516 100.51464844 C-45.19474854 100.65676758 -46.01596191 100.79888672 -46.86206055 100.9453125 C-49.33735321 101.26503673 -51.72030099 101.30109528 -54.21337891 101.24902344 C-53.39555854 103.44517788 -53.39555854 103.44517788 -51.14453125 104.05004883 C-44.05480383 105.96342258 -37.14616514 107.03535993 -29.83837891 107.68652344 C-28.57832031 107.80503662 -27.31826172 107.9235498 -26.02001953 108.0456543 C-16.07303272 108.94831913 -6.10931507 109.6082119 3.85693359 110.25683594 C4.5254472 110.30038523 5.1939608 110.34393452 5.88273239 110.38880348 C12.70709634 110.83227897 19.53189221 111.26737224 26.35805321 111.68232059 C52.965142 113.30321209 52.965142 113.30321209 64.78662109 115.24902344 C64.78662109 115.90902344 64.78662109 116.56902344 64.78662109 117.24902344 C59.50849416 118.92937998 54.52168402 119.73700345 49.01318359 120.21386719 C48.18113403 120.29157349 47.34908447 120.36927979 46.49182129 120.44934082 C44.71747449 120.61467824 42.94286686 120.77723658 41.16802979 120.93722534 C36.50815127 121.35867911 31.85064399 121.80500006 27.19287109 122.24902344 C26.27764679 122.3358287 25.36242249 122.42263397 24.41946411 122.5120697 C13.51383948 123.55133951 2.64636082 124.80875223 -8.21337891 126.24902344 C-8.86502014 126.33432312 -9.51666138 126.4196228 -10.18804932 126.50750732 C-33.09838277 129.46797515 -33.09838277 129.46797515 -55.77587891 133.81152344 C-56.60627686 133.9969873 -57.4366748 134.18245117 -58.29223633 134.37353516 C-67.20692873 136.51261914 -77.08404542 139.13244821 -82.46337891 147.10058594 C-84.99395384 151.65210613 -85.66288623 154.95908966 -85.21337891 160.24902344 C-84.01501369 163.91388391 -82.33604609 167.35824692 -80.70166016 170.84472656 C-78.44180383 175.92248537 -77.66994999 179.67738411 -78.21337891 185.24902344 C-81.01615157 188.93266752 -83.73034632 191.07489585 -88.21337891 192.24902344 C-92.49655119 192.7162786 -94.64231569 192.55651902 -98.46337891 190.49902344 C-103.07558363 186.72540139 -103.07558363 186.72540139 -104.21337891 184.24902344 C-104.21337891 178.3264471 -102.73094599 173.71559065 -100.65087891 168.18652344 C-98.66039507 162.81105983 -97.29942844 158.93582634 -98.21337891 153.24902344 C-100.09751805 149.92094105 -100.09751805 149.92094105 -102.21337891 147.24902344 C-102.21337891 146.58902344 -102.21337891 145.92902344 -102.21337891 145.24902344 C-103.04095703 144.84296875 -103.04095703 144.84296875 -103.88525391 144.42871094 C-105.49602741 143.61251363 -107.08917182 142.76092229 -108.66650391 141.88183594 C-134.55280331 127.92637285 -168.91646678 127.47652919 -197.79003906 124.77734375 C-203.18404121 124.27083239 -208.57645127 123.74758161 -213.96902466 123.22612 C-216.81146725 122.95127481 -219.65426846 122.68087918 -222.49752808 122.41462708 C-247.98128451 119.9930549 -247.98128451 119.9930549 -253.21337891 118.24902344 C-252.71837891 116.76402344 -252.71837891 116.76402344 -252.21337891 115.24902344 C-239.63081355 113.61090133 -227.09385102 112.01349168 -214.40551758 111.5402832 C-213.70144775 111.51377686 -212.99737793 111.48727051 -212.27197266 111.45996094 C-211.37949829 111.43361572 -211.37949829 111.43361572 -210.46899414 111.40673828 C-208.52810825 111.27102962 -206.59483796 111.03335166 -204.66625977 110.77636719 C-199.42899023 110.10363772 -194.17970998 109.8649583 -188.90869141 109.60058594 C-186.69252218 109.48122779 -184.47637707 109.36142135 -182.26025391 109.24121094 C-178.81417153 109.05691281 -175.36803729 108.87551526 -171.92138672 108.70214844 C-158.1597103 108.00394865 -144.74098593 106.93354128 -131.21337891 104.24902344 C-131.21337891 103.58902344 -131.21337891 102.92902344 -131.21337891 102.24902344 C-131.87233154 102.16861816 -132.53128418 102.08821289 -133.21020508 102.00537109 C-136.27401962 101.63031932 -139.3374461 101.25218013 -142.40087891 100.87402344 C-143.95452148 100.68453125 -143.95452148 100.68453125 -145.53955078 100.49121094 C-150.81615983 99.8377609 -156.06748859 99.12220882 -161.31494141 98.26464844 C-169.97033128 96.91117324 -178.68054773 96.17166904 -187.40087891 95.37402344 C-189.24474546 95.20268934 -191.0885762 95.03096932 -192.93237305 94.85888672 C-195.79741363 94.59158594 -198.6624822 94.32462583 -201.5276947 94.05917358 C-208.13810948 93.4462184 -214.74649111 92.81433544 -221.35400391 92.17089844 C-245.95783433 89.76661893 -245.95783433 89.76661893 -270.60961914 87.93212891 C-280.27228314 87.29699373 -289.97350138 86.25735565 -299.21337891 83.24902344 C-298.21337891 80.24902344 -298.21337891 80.24902344 -295.97973633 79.09667969 C-293.21927414 78.25082983 -290.82734576 77.8806277 -287.95166016 77.68652344 C-286.92862793 77.61312744 -285.9055957 77.53973145 -284.8515625 77.46411133 C-283.75408691 77.39313232 -282.65661133 77.32215332 -281.52587891 77.24902344 C-279.17040986 77.08105878 -276.81494112 76.91308991 -274.45947266 76.74511719 C-272.04413832 76.57931142 -269.62877409 76.41394047 -267.21337891 76.24902344 C-233.84960767 74.08336182 -233.84960767 74.08336182 -201.21337891 67.24902344 C-199.93591797 66.9203125 -198.65845703 66.59160156 -197.34228516 66.25292969 C-196.30974609 65.92164063 -195.27720703 65.59035156 -194.21337891 65.24902344 C-193.88337891 64.58902344 -193.55337891 63.92902344 -193.21337891 63.24902344 C-194.52060913 63.28926636 -194.52060913 63.28926636 -195.85424805 63.33032227 C-207.44024996 63.52151529 -218.78695781 62.47895076 -230.30316162 61.28308105 C-236.05379012 60.68777269 -241.80730001 60.12199292 -247.56103516 59.55761719 C-248.71603516 59.44414948 -249.87103516 59.33068176 -251.06103516 59.21377563 C-261.89315882 58.16125734 -272.73381405 57.28299397 -283.58837891 56.49902344 C-284.38436493 56.44040131 -285.18035095 56.38177917 -286.00045776 56.32138062 C-306.67751018 54.80805718 -327.36300736 54.10123399 -348.08837891 53.68652344 C-350.15609239 53.64314824 -352.22380077 53.59952937 -354.29150391 53.55566406 C-359.26540836 53.4506597 -364.23936873 53.34888897 -369.21337891 53.24902344 C-369.21337891 52.58902344 -369.21337891 51.92902344 -369.21337891 51.24902344 C-361.27569485 49.85760238 -353.34799829 48.69686247 -345.33837891 47.81152344 C-344.20416504 47.68302002 -343.06995117 47.5545166 -341.90136719 47.42211914 C-334.90081393 46.66025864 -327.91094413 46.06252351 -320.88525391 45.60058594 C-289.86162007 43.54163336 -263.75989443 38.86817495 -237.70507812 20.8659668 C-222.72305283 10.651682 -196.72301679 -2.05404326 -178.21337891 1.24902344 C-176.08837891 3.93652344 -176.08837891 3.93652344 -174.21337891 7.24902344 C-164.22089399 16.96470821 -146.37455101 16.81809413 -133.46923828 16.72583008 C-121.39419975 16.40034989 -110.21200905 14.0537028 -99.19384766 8.98339844 C-93.55579505 6.8927596 -88.19462973 9.94364813 -82.93994141 11.94042969 C-63.49773292 19.10886987 -40.92873486 18.50004771 -21.71728516 10.85839844 C-17.12579002 8.72281931 -13.390023 6.75185473 -10.08837891 2.87402344 C-6.41823382 -0.4769786 -4.76239203 -0.1327436 0 0 Z "
        fill="#10A2D6"
        transform="translate(448.21337890625,505.7509765625)"
      />
      <path
        d="M0 0 C0.33 0 0.66 0 1 0 C1.14695312 1.30710937 1.29390625 2.61421875 1.4453125 3.9609375 C4.78131365 31.42277472 15.839457 51.40399138 31.49414062 73.83251953 C50.47900875 101.15866402 60.72190434 129.35669442 54.87280273 163.15722656 C50.39597791 185.35033361 40.55105468 208.02888151 22 222 C21.67 222 21.34 222 21 222 C21.01571045 221.40912598 21.0314209 220.81825195 21.04760742 220.20947266 C21.79237235 187.44610081 16.67466966 154.45066511 6.68310547 123.21240234 C5.20419546 118.42259444 3.90178648 113.58028493 2.5625 108.75 C0.06675667 99.78791979 -2.4617001 90.83620828 -5.04663086 81.89941406 C-6.46953864 76.95514854 -7.78044157 71.99847188 -9 67 C-9.66912539 98.34595108 -6.58185603 128.3868224 -1.16496277 159.22953796 C0.2840814 167.5300551 1.55755609 175.85578521 2.8125 184.1875 C2.91745789 184.87755127 3.02241577 185.56760254 3.1305542 186.27856445 C3.7749648 190.51614122 4.39700312 194.75634059 5 199 C5.11706299 199.78769775 5.23412598 200.57539551 5.35473633 201.38696289 C6.30856658 208.58130502 6.10890844 215.81921298 6.0625 223.0625 C6.05747314 224.41861813 6.05291234 225.77473808 6.04882812 227.13085938 C6.03712079 230.42061994 6.02072211 233.71028594 6 237 C-19.0945324 225.02703319 -34.91804067 192.83912635 -44.3125 168.1875 C-49.38258953 153.37926493 -51.3612566 138.52207041 -51.31567383 122.94458008 C-51.31251784 120.70018652 -51.33606243 118.4571223 -51.36132812 116.21289062 C-51.54689957 73.36142551 -29.82347093 30.09521098 0 0 Z "
        fill="#78A150"
        transform="translate(350,17)"
      />
      <path
        d="M0 0 C0.48108275 1.41601714 0.95978141 2.83284437 1.4375 4.25 C1.70433594 5.03890625 1.97117187 5.8278125 2.24609375 6.640625 C2.91954708 8.74821988 3.49150595 10.84753973 4 13 C-7.12883653 18.41328592 -17.18471991 20.49981795 -29.5625 20.375 C-30.71685547 20.38660156 -31.87121094 20.39820313 -33.06054688 20.41015625 C-41.87407081 20.38016127 -49.95997056 19.6994037 -57 14 C-56.68847656 12.13232422 -56.68847656 12.13232422 -56 10 C-48.67190187 4.85514354 -39.90297005 4.72583831 -31.25 3.875 C-28.27542917 3.56557773 -25.30176688 3.24789675 -22.328125 2.9296875 C-21.25528259 2.817388 -21.25528259 2.817388 -20.1607666 2.70281982 C-14.80635222 2.12883524 -9.51458531 1.3281232 -4.21386719 0.37158203 C-2 0 -2 0 0 0 Z "
        fill="#0D97C9"
        transform="translate(342,494)"
      />
      <path
        d="M0 0 C1.13824219 0.4640625 2.27648437 0.928125 3.44921875 1.40625 C7.86097646 3.05666386 12.16158892 3.85329162 16.8125 4.5 C17.62565674 4.62181641 18.43881348 4.74363281 19.27661133 4.86914062 C21.84992526 5.25443381 24.42464124 5.62863772 27 6 C30.39742034 6.48990214 33.79282579 6.99145473 37.1875 7.5 C37.95231689 7.60634766 38.71713379 7.71269531 39.50512695 7.82226562 C44.67117573 8.59759801 49.15992021 10.02669454 54 12 C53.9375 14.25 53.9375 14.25 53 17 C44.24796314 23.2514549 35.04452593 23.31854951 24.625 23.25 C23.45710938 23.25773438 22.28921875 23.26546875 21.0859375 23.2734375 C14.15244525 23.25789155 7.73105915 22.68901684 1 21 C-0.32719886 14.03220597 -0.08825381 7.07011089 0 0 Z "
        fill="#0B9BCE"
        transform="translate(370,491)"
      />
      <path
        d="M0 0 C6.67153437 -0.72516678 11.45149928 1.31586688 17 5 C21.91581027 9.3831084 25.77576489 14.76937865 28 21 C28 21.99 28 22.98 28 24 C20.71918335 24.99283863 15.01999888 21.91499265 9 18 C4.90749442 14.2684083 1.09612648 10.1975381 -1 5 C-0.625 2.25 -0.625 2.25 0 0 Z "
        fill="#21A5D8"
        transform="translate(129,436)"
      />
      <path
        d="M0 0 C0.89203125 0.00902344 1.7840625 0.01804687 2.703125 0.02734375 C3.37859375 0.03894531 4.0540625 0.05054688 4.75 0.0625 C2.08605498 8.6151656 -1.76832906 14.62187675 -9.453125 19.4453125 C-14.83974293 22.13862146 -19.28198163 22.4414218 -25.25 22.0625 C-24.93686615 15.95639002 -22.1470485 11.59019121 -18.25 7.0625 C-12.3842818 2.19131534 -7.62757294 -0.1003628 0 0 Z "
        fill="#15A8D8"
        transform="translate(583.25,436.9375)"
      />
      <path
        d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.9735575 13.71033407 -1.02644046 21.77977311 -8.66015625 31.41015625 C-11 34 -11 34 -14 35 C-16.65792786 29.68414428 -15.7895114 21.63052454 -14.12890625 16.09765625 C-10.9188349 9.26704542 -6.25139822 4.16759881 0 0 Z "
        fill="#1DA9CE"
        transform="translate(448,448)"
      />
      <path
        d="M0 0 C3.85631305 0.22036075 6.58223971 1.58396535 9.44140625 4.17578125 C15.59692159 11.38035685 17.68062538 18.85873724 17.40625 28.1875 C17.01554873 30.89235497 16.3890527 32.66997611 15 35 C7.2793757 25.17375089 -1 13.96905856 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z "
        fill="#2AACE1"
        transform="translate(264,448)"
      />
      <path
        d="M0 0 C1.76923828 0.01353516 1.76923828 0.01353516 3.57421875 0.02734375 C4.47785156 0.03894531 5.38148438 0.05054688 6.3125 0.0625 C6.93359375 1.875 6.93359375 1.875 7.3125 4.0625 C3.32905868 10.23040913 -1.85604036 12.78534679 -8.6875 15.0625 C-10.41545352 15.13052967 -12.14585365 15.14745645 -13.875 15.125 C-14.77605469 15.11597656 -15.67710937 15.10695313 -16.60546875 15.09765625 C-17.29253906 15.08605469 -17.97960937 15.07445312 -18.6875 15.0625 C-19.5 12.875 -19.5 12.875 -19.6875 10.0625 C-17.5625 7.5 -17.5625 7.5 -14.6875 5.0625 C-13.82125 4.32 -12.955 3.5775 -12.0625 2.8125 C-8.05103937 -0.1433131 -4.85002071 -0.04802001 0 0 Z "
        fill="#1DA6D9"
        transform="translate(556.6875,490.9375)"
      />
      <path
        d="M0 0 C1.32451172 0.02707031 1.32451172 0.02707031 2.67578125 0.0546875 C3.67158203 0.08949219 3.67158203 0.08949219 4.6875 0.125 C4.33733384 2.93565665 3.82090115 3.99754007 1.74145508 5.984375 C0.90509521 6.60828125 0.06873535 7.2321875 -0.79296875 7.875 C-1.71013672 8.5659375 -2.62730469 9.256875 -3.57226562 9.96875 C-4.53841797 10.6803125 -5.50457031 11.391875 -6.5 12.125 C-7.44681641 12.8365625 -8.39363281 13.548125 -9.36914062 14.28125 C-13.93447087 17.69648659 -18.52173876 21.03314737 -23.3125 24.125 C-23.6425 23.795 -23.9725 23.465 -24.3125 23.125 C-23.77981995 14.06943921 -19.05521037 9.62628444 -12.62890625 3.859375 C-8.50925759 0.77484885 -5.10805555 -0.13621481 0 0 Z "
        fill="#17A7D6"
        transform="translate(511.3125,477.875)"
      />
      <path
        d="M0 0 C10.30156034 -0.48288564 17.78478513 -0.53496945 25.875 6.5 C27.69552243 8.64179109 28.9464524 10.41401954 30 13 C28.26461486 14.73538514 26.05796263 14.33604051 23.6875 14.4375 C15.82813595 14.37184899 9.02135985 11.59140314 3.13671875 6.3359375 C0 2.74859155 0 2.74859155 0 0 Z "
        fill="#19A9D9"
        transform="translate(148,491)"
      />
      <path
        d="M0 0 C7.02329994 -0.63848181 11.29429161 0.87921061 17 5 C25.23773585 11.90188679 25.23773585 11.90188679 26 18 C23.39828199 18.99601733 22.25187471 19.09021768 19.58984375 18.13671875 C12.19140798 14.09427446 5.62532005 9.32168462 0 3 C0 2.01 0 1.02 0 0 Z "
        fill="#14ACD8"
        transform="translate(204,480)"
      />
      <path
        d="M0 0 C-2.43411253 6.89665217 -5.86713631 12.48951215 -12.5 15.6875 C-16 17 -16 17 -19 17 C-19.4831948 13.03780265 -19.07595777 10.63072987 -16.875 7.375 C-11.94060652 1.14135446 -7.7387016 -0.53370356 0 0 Z "
        fill="#18A7D6"
        transform="translate(479,470)"
      />
      <path
        d="M0 0 C5.97291831 0.29864592 9.78210303 2.99625674 14 7 C16.47337017 10.78734808 17.3981914 13.48716412 17 18 C11.05986327 17.70299316 7.12904871 15.08347422 3 11 C0.6591559 7.39152272 0 4.33770795 0 0 Z "
        fill="#25ACDB"
        transform="translate(234,469)"
      />
      <path
        d="M0 0 C0 0.99 0 1.98 0 3 C-0.60078369 3.04318359 -1.20156738 3.08636719 -1.82055664 3.13085938 C-8.22471033 3.67036493 -14.23002778 4.86522552 -20.4375 6.5 C-21.32115234 6.72558594 -22.20480469 6.95117188 -23.11523438 7.18359375 C-26.44920912 8.04053935 -29.73316021 8.9110534 -33 10 C-33.33 9.01 -33.66 8.02 -34 7 C-30.2151526 5.81039905 -26.42124239 4.65266914 -22.625 3.5 C-21.56410156 3.16613281 -20.50320312 2.83226562 -19.41015625 2.48828125 C-12.77005538 0.49217731 -6.93235425 -0.48920562 0 0 Z "
        fill="#22ADDC"
        transform="translate(270,507)"
      />
      <path
        d="M0 0 C5.99765349 0.06193055 11.3601687 1.44910336 17.08984375 3.1171875 C18.06888672 3.38660156 19.04792969 3.65601563 20.05664062 3.93359375 C27.21526228 5.95079985 27.21526228 5.95079985 30.65234375 8.2421875 C26.81364074 9.69792753 24.32541592 8.72469283 20.52734375 7.4296875 C14.94124361 5.60552599 9.44006051 4.23511408 3.65234375 3.2421875 C3.65234375 2.5821875 3.65234375 1.9221875 3.65234375 1.2421875 C-1.61385708 1.49667102 -1.61385708 1.49667102 -5.59765625 4.6796875 C-6.17515625 5.5253125 -6.75265625 6.3709375 -7.34765625 7.2421875 C-8.33765625 7.9021875 -9.32765625 8.5621875 -10.34765625 9.2421875 C-11.33765625 8.9121875 -12.32765625 8.5821875 -13.34765625 8.2421875 C-12.78175781 7.74847656 -12.21585937 7.25476563 -11.6328125 6.74609375 C-10.89933594 6.10542969 -10.16585938 5.46476562 -9.41015625 4.8046875 C-8.67925781 4.16660156 -7.94835937 3.52851563 -7.1953125 2.87109375 C-4.39637244 0.40352926 -3.82220337 0.06739497 0 0 Z "
        fill="#26AEDC"
        transform="translate(445.34765625,505.7578125)"
      />
      <path
        d="M0 0 C-5.02215119 2.45381849 -8.48417692 3.35606282 -14.17578125 3.14453125 C-14.82701462 3.12283371 -15.47824799 3.10113617 -16.1492157 3.07878113 C-17.51164178 3.02989839 -18.87380833 2.97319676 -20.2355957 2.90893555 C-22.32411068 2.81196089 -24.41223179 2.74304581 -26.50195312 2.67773438 C-36.72810507 2.27189493 -36.72810507 2.27189493 -39 0 C-38.1529248 0.00523682 -37.30584961 0.01047363 -36.43310547 0.01586914 C-33.26855727 0.03298535 -30.1040328 0.04548626 -26.93945312 0.05493164 C-25.5738853 0.05993786 -24.20832276 0.06674482 -22.84277344 0.07543945 C-20.87176882 0.08766831 -18.9007239 0.09272866 -16.9296875 0.09765625 C-15.74616699 0.10289307 -14.56264648 0.10812988 -13.34326172 0.11352539 C-0.89333215 -0.30923036 -0.89333215 -0.30923036 0 0 Z "
        fill="#46B8E1"
        transform="translate(416,522)"
      />
      <path
        d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-4.6 7.6 -11.2 14.2 -18 21 C-18.66 20.67 -19.32 20.34 -20 20 C-18.88200014 18.66079162 -17.75538103 17.32877444 -16.625 16 C-15.68527344 14.88625 -15.68527344 14.88625 -14.7265625 13.75 C-13.87191406 12.88375 -13.87191406 12.88375 -13 12 C-12.34 12 -11.68 12 -11 12 C-11 11.34 -11 10.68 -11 10 C-10.34 10 -9.68 10 -9 10 C-8.67 9.01 -8.34 8.02 -8 7 C-6.15234375 5.17578125 -6.15234375 5.17578125 -3.9375 3.3125 C-3.20402344 2.68988281 -2.47054688 2.06726563 -1.71484375 1.42578125 C-1.14894531 0.95527344 -0.58304687 0.48476563 0 0 Z "
        fill="#77955F"
        transform="translate(427,317)"
      />
      <path
        d="M0 0 C2.475 0.495 2.475 0.495 5 1 C5.33 4.3 5.66 7.6 6 11 C5.01 11 4.02 11 3 11 C0 4.5 0 4.5 0 0 Z "
        fill="#21A2D0"
        transform="translate(234,469)"
      />
      <path
        d="M0 0 C0.89203125 0.00902344 1.7840625 0.01804687 2.703125 0.02734375 C3.37859375 0.03894531 4.0540625 0.05054688 4.75 0.0625 C4.75 1.0525 4.75 2.0425 4.75 3.0625 C-1.19 3.0625 -7.13 3.0625 -13.25 3.0625 C-8.45451074 0.66475537 -5.31686343 -0.06995873 0 0 Z "
        fill="#3DB4DE"
        transform="translate(265.25,506.9375)"
      />
      <path
        d="M0 0 C8.73954048 0.02585663 8.73954048 0.02585663 12.890625 1.1328125 C12.890625 1.4628125 12.890625 1.7928125 12.890625 2.1328125 C11.92640625 2.07480469 10.9621875 2.01679688 9.96875 1.95703125 C8.70546875 1.91191406 7.4421875 1.86679687 6.140625 1.8203125 C4.26117188 1.73330078 4.26117188 1.73330078 2.34375 1.64453125 C-1.25389676 1.78752558 -1.25389676 1.78752558 -3.375 4.52734375 C-3.94734375 5.38714844 -4.5196875 6.24695313 -5.109375 7.1328125 C-6.099375 7.7928125 -7.089375 8.4528125 -8.109375 9.1328125 C-9.099375 8.8028125 -10.089375 8.4728125 -11.109375 8.1328125 C-10.54347656 7.63910156 -9.97757812 7.14539063 -9.39453125 6.63671875 C-8.66105469 5.99605469 -7.92757813 5.35539062 -7.171875 4.6953125 C-6.44097656 4.05722656 -5.71007812 3.41914063 -4.95703125 2.76171875 C-1.96475382 0.12370672 -1.96475382 0.12370672 0 0 Z "
        fill="#3AADD8"
        transform="translate(443.109375,505.8671875)"
      />
      <path
        d="M0 0 C3.3407848 3.3407848 2.9821998 7.29511222 3.09765625 11.8671875 C3.09110736 13.20316035 3.07932798 14.53911709 3.0625 15.875 C3.05798828 16.56335938 3.05347656 17.25171875 3.04882812 17.9609375 C3.03716336 19.64066335 3.01923271 21.32034375 3 23 C2.67 23 2.34 23 2 23 C0.76892281 15.27279225 -0.2700558 7.8316181 0 0 Z "
        fill="#638954"
        transform="translate(350,193)"
      />
      <path
        d="M0 0 C0.66 0 1.32 0 2 0 C3.625 2 3.625 2 5 4 C4.67 4.66 4.34 5.32 4 6 C3.34 5.67 2.68 5.34 2 5 C1.67 9.95 1.34 14.9 1 20 C0.67 20 0.34 20 0 20 C0 13.4 0 6.8 0 0 Z "
        fill="#8BAC57"
        transform="translate(193,118)"
      />
      <path
        d="M0 0 C-1.78953185 0.83790789 -3.58169695 1.67019396 -5.375 2.5 C-6.87160156 3.19609375 -6.87160156 3.19609375 -8.3984375 3.90625 C-11 5 -11 5 -13 5 C-13.33 3.68 -13.66 2.36 -14 1 C-12.04310963 0.63794536 -10.08442332 0.28558579 -8.125 -0.0625 C-7.03445313 -0.25972656 -5.94390625 -0.45695312 -4.8203125 -0.66015625 C-2 -1 -2 -1 0 0 Z "
        fill="#D2DCD2"
        transform="translate(593,317)"
      />
      <path
        d="M0 0 C3.9036874 3.46994436 6.36588975 7.55224006 9 12 C5.97887029 11.41097471 5.08347482 11.08347482 2.8125 8.8125 C0.85143288 5.76946481 0.33238924 3.57318436 0 0 Z "
        fill="#5C894A"
        transform="translate(293,274)"
      />
      <path
        d="M0 0 C0.66 0 1.32 0 2 0 C2.36463732 1.74784829 2.7163078 3.49840502 3.0625 5.25 C3.25972656 6.22453125 3.45695312 7.1990625 3.66015625 8.203125 C3.98397535 10.868119 3.85503199 12.48871723 3 15 C0.5978396 10.1956792 0.38877771 5.26896105 0 0 Z "
        fill="#7B9962"
        transform="translate(342,147)"
      />
      <path
        d="M0 0 C0.33 0 0.66 0 1 0 C1.46963359 4.03884885 1.35683282 5.54121494 -1.1875 8.8125 C-3.98487704 10.9882377 -5.52308771 11.70197895 -9 12 C-7.02215522 9.9515179 -5.19868283 8.130563 -2.8125 6.5625 C-0.4733915 4.54602715 -0.32495406 3.00582508 0 0 Z "
        fill="#1888C1"
        transform="translate(369,685)"
      />
      <path
        d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.02 4.96 -1.96 8.92 -4 13 C-5 10 -5 10 -4.00390625 7.51953125 C-3.52824219 6.62621094 -3.05257813 5.73289063 -2.5625 4.8125 C-2.08941406 3.91144531 -1.61632812 3.01039063 -1.12890625 2.08203125 C-0.75636719 1.39496094 -0.38382812 0.70789063 0 0 Z "
        fill="#709058"
        transform="translate(397,200)"
      />
      <path
        d="M0 0 C3.91593446 0.78318689 7.36406635 2.39179858 11 4 C11 4.66 11 5.32 11 6 C7.27566618 4.7874262 3.62197194 3.49140021 0 2 C0 1.34 0 0.68 0 0 Z "
        fill="#62805E"
        transform="translate(179,402)"
      />
      <path
        d="M0 0 C3.45195767 1.4258086 5.1014256 3.09746334 7.25 6.125 C8.03117188 7.21167969 8.03117188 7.21167969 8.828125 8.3203125 C9.40820312 9.15175781 9.40820312 9.15175781 10 10 C9.01 10 8.02 10 7 10 C5.17578125 8.06640625 5.17578125 8.06640625 3.3125 5.5625 C2.68988281 4.73878906 2.06726563 3.91507813 1.42578125 3.06640625 C0 1 0 1 0 0 Z "
        fill="#BFCEAD"
        transform="translate(229,182)"
      />
      <path
        d="M0 0 C-0.99 0.33 -1.98 0.66 -3 1 C-3 1.99 -3 2.98 -3 4 C-4.98 3.34 -6.96 2.68 -9 2 C-9 1.34 -9 0.68 -9 0 C-5.62182575 -0.84454356 -3.32534757 -1.10844919 0 0 Z "
        fill="#CFE2EA"
        transform="translate(403,607)"
      />
      <path
        d="M0 0 C0 0.66 0 1.32 0 2 C-3.47325181 3.1577506 -6.36067448 3.06866652 -10 3 C-6.84916414 -0.15083586 -4.41812253 0 0 0 Z "
        fill="#1FA1CC"
        transform="translate(582,437)"
      />
      <path
        d="M0 0 C0 3 0 3 -1.53125 4.60546875 C-2.1809375 5.12753906 -2.830625 5.64960938 -3.5 6.1875 C-4.1496875 6.71730469 -4.799375 7.24710938 -5.46875 7.79296875 C-5.9740625 8.19128906 -6.479375 8.58960938 -7 9 C-7 6 -7 6 -5.46875 4.39453125 C-4.49421875 3.61142578 -4.49421875 3.61142578 -3.5 2.8125 C-2.8503125 2.28269531 -2.200625 1.75289062 -1.53125 1.20703125 C-1.0259375 0.80871094 -0.520625 0.41039062 0 0 Z "
        fill="#D2E1CF"
        transform="translate(515,172)"
      />
      <path
        d="M0 0 C1.98 0 3.96 0 6 0 C5.67 0.99 5.34 1.98 5 3 C3.02 3 1.04 3 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z "
        fill="#2794BF"
        transform="translate(196,621)"
      />
      <path
        d="M0 0 C4.24822374 0.47202486 6.19989709 2.96655518 9 6 C8.67 6.66 8.34 7.32 8 8 C6.66372225 6.85760183 5.33104612 5.71098945 4 4.5625 C3.2575 3.92441406 2.515 3.28632813 1.75 2.62890625 C1.1725 2.09136719 0.595 1.55382812 0 1 C0 0.67 0 0.34 0 0 Z "
        fill="#0FA2CB"
        transform="translate(219,486)"
      />
      <path
        d="M0 0 C4.31392226 0.4793247 6.16569547 1.7457985 9 5 C5.85262818 4.30058404 2.97411124 3.23921302 0 2 C0 1.34 0 0.68 0 0 Z "
        fill="#34A3D8"
        transform="translate(264,448)"
      />
      <path
        d="M0 0 C2.52259061 1.97420135 2.9929808 2.96745642 3.6875 6.1875 C3.790625 7.115625 3.89375 8.04375 4 9 C3.67 8.34 3.34 7.68 3 7 C2.34 7 1.68 7 1 7 C0.67 4.69 0.34 2.38 0 0 Z "
        fill="#5F8D4E"
        transform="translate(326,283)"
      />
      <path
        d="M0 0 C-2.62198774 2.15377564 -4.64404172 3.40072174 -8 4 C-8 3.34 -8 2.68 -8 2 C-3.61016949 -1.20338983 -3.61016949 -1.20338983 0 0 Z "
        fill="#32B7E9"
        transform="translate(355,514)"
      />
      <path
        d="M0 0 C2.31 0 4.62 0 7 0 C6.34 1.32 5.68 2.64 5 4 C4.01 4 3.02 4 2 4 C1.34 2.68 0.68 1.36 0 0 Z "
        fill="#1DA3D2"
        transform="translate(148,492)"
      />
      <path
        d="M0 0 C0 0.33 0 0.66 0 1 C-7.38461538 3.21538462 -7.38461538 3.21538462 -10.5 2.125 C-10.995 1.75375 -11.49 1.3825 -12 1 C-8.0186217 -0.3271261 -4.14954773 -0.06915913 0 0 Z "
        fill="#9CB57E"
        transform="translate(532,273)"
      />
    </svg>
  );
}
