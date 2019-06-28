<template>
  <div>
    <div>{{'2019-06-03' | formatDate('yyyy.MM.dd')}}</div>
    <!--<xy-page-progress></xy-page-progress>-->
    <xy-reach-bottom
      threshold="50"
      @on-bottom="onbottom"
    ></xy-reach-bottom>
    <!--<div class="lazy-load"-->
    <!--style="width: 150px;height: 250px;border: 1px solid red;">-->
    <!--<img v-lazy="imgTest"-->
    <!--class="lazy-cover"-->
    <!--:key="imgTest"-->
    <!--:data-img="imgTest3"-->
    <!--:data-index="0"-->
    <!--v-xy-pop-image:change="onPopChange">-->
    <!--</div>-->
    <!--<div class="lazy-load"-->
    <!--style="width: 250px;height: 150px;border: 1px solid blue;">-->
    <!--<img v-lazy="imgTest2"-->
    <!--class="lazy-contain"-->
    <!--:key="imgTest2"-->
    <!--:data-img="imgTest2"-->
    <!--:data-index="1"-->
    <!--v-xy-pop-image:change="onPopChange">-->
    <!--</div>-->
    <!--<xy-time-count class="mall-picks__item__info__time"-->
    <!--:time="time1"-->
    <!--label="即将开始(2天)">-->
    <!--</xy-time-count>-->
    <!--<xy-time-count class="mall-picks__item__info__time"-->
    <!--:time="time2"-->
    <!--label="即将开始(1天+多5秒)">-->
    <!--</xy-time-count>-->
    <!--<xy-time-count class="mall-picks__item__info__time"-->
    <!--:time="time3"-->
    <!--label="即将开始(5秒)"-->
    <!--@finish="onFinish">-->
    <!--</xy-time-count>-->
    <div>失败图片:</div>
    <div
      class="lazy-load"
      style="width: 250px;height: 150px;border: 1px solid blue;"
    >
      <img
        v-lazy="'none'"
        class="lazy-cover"
        :key="'none'"
        :data-img="'none'"
        error-img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACuCAIAAAAgbqG5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGRkNjU3MC0xNDk0LWIzNGEtOGVlNy02YWU3YTY4NWE5MGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYzNjBGMzQ2MUI3MTFFOUFFNkVGRDAwNTRBNzE2NUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYzNjBGMzM2MUI3MTFFOUFFNkVGRDAwNTRBNzE2NUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0ZGQ2NTcwLTE0OTQtYjM0YS04ZWU3LTZhZTdhNjg1YTkwYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NGRkNjU3MC0xNDk0LWIzNGEtOGVlNy02YWU3YTY4NWE5MGEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7LVSVqAAAXxUlEQVR42uydB5PbRpaAgSZAEsxhOFGS5ZUsqVZ767Dl//8rXOuq9dV5bStO5DDnewBmMCA6otENguGJmuJwQKT39UsdYP73//4wSLJareDH4/vI5+tbGivsy7Qdiv4a+YTzXWPt/PC3wfb+m/BP2oFM04z8ujJW5FMl3RzaCVM3IO6ceS3cS6DtdhXaV3j/yL9mihD+hG9v4puRdhn5IvvXyCec74aPBzpbuRe2XMIlr5aerB6FyBzxQE/buztbLVcPu4NXtHHEuVj8TeQS1j5fOzHW2dLuFXG3Zmhf4f0johpoH2qlgb0947uuzlx1LR9VtYo0brZWOAcyMN34iAAb3ssImU+RE84sDYihldBh0qCBS2Rkg0ijDx9v/WZqoCF0CN8I+ScDP7eXBsTTBErTNojQEBDA9mhsGrhHj0VD5NwC58I4dDwaDCMhDZxr9N4gvsVO11PQLoBIAGljIRpECGDRQLk34a8EFou7fz4N0ZOPTYNpmFwakFCIYFLblRANYl+kxQFBUxNGRz8NpsmlIchBfHyJdkItDRzgeDQgfpP1d5HENpixycCNbUxDkiEaAg4CoDXRwDc/TBqQeJM1VdNAU0zQkpK5lWzREOE7gzTEiArd3WimIdx0uMWGLaWByHoWaEAiRpv2ZYU0EJvLDtMQhEE495uiAUkEd2ppiNyRuIXIraYhYghpNLBLQ8lpEEIBK3copkEkKtx5GvwYgkED2Sqro4EVNpJySVOtbWCniFtEA7ssKF7Rwl2kWhrYrp8VNir3FGtOwespiNtJkU0aiIVIxiHY6olElAppoFbBjSBWMI14NJiSNPiH9AtGjKazLTRwy9IiNDDSaXJJSoCGGF0e6zRYhrCY3j9iJy/+IcUYrCLGwDQN/KuRHbJ/ZW9AOjcz1JG4dvTZbDqbzebz+WKx8Mvcgf8G85nL5SwLXnnLsrxP1g9qPA1oCO83fAjiiTFOHk4AIRT9YuhAT5/zjsg9HOw2BgoMxdNoCD4PYW6mQIPgn+BzUP9kMvUhoBLsymK5XHibjGCHhUIRXgCHVhrgDdBgPopuGiySdvj2wVgZ4jREwsMUaGBvDM1+MhlPpxNQv6A9i5AxHo/gBTSUSuWI4VROQ8gy6aUhnlXwz4BrAyJJswhNummAw008AQLA/hsqBHgCc1Kp1MA8cGngniebBhBwFlppsOJaBEGPEOGA7bP10TB1ZeLZgKmhQeACe71uuVy1bZtNQ+TqJGjwQwcaDcT7GIsGi2HzuTEkg4ZIATFNGuCWge59GwAO3tAscPR+/75arUM4mQINNE+x9kUpGuKHjUS7RLpBYrZEDQ1g8331gw2AFMBIXYCGWq3hB/xaacC3iUUDIxyxJCwCW7v+6caJJ2Ro8HK/GSjedwEbUX/kqgeDHtDAzSlU0UBsn1waGIez2HmBSB4R3jvxROHj0Wicz+f98EqOhrkrs0eZygX/WgXOD9KKYtFJQgPXEAY04BW8hDRYMpYAi1aI8UFwmMFgcHV16ZY2Uc62waW6/9Gj4MPXwCcuII2HHwv4P3+s+WRL8UQZjdwMU6T6RKNBJCXWRIPlt8gkPoIRH/iH6fd7jwEdeHR4TYwdFYB4PB47jqOJBrztKaQBUSr0wj5iPT6g3R1jb2QyGTG6YPC8j91rwH1PjBt4/V7kvSG5Cw5fGHvY/15x4KeyQQ1b0+AGGRoEBkyjoHWbkiaRUD/YZxRAIKOh3Y0s04BoNl/YMHCGHWgq82VZwCqkMPAJpyHhoEgkGyZ4FJD7F9YOv/GMfxM+YuGXBVOmIXLQuDQg6ahxSedg/fwWxv7JfD4zUhkUqZAGxMgLBPJG02DNm4oxqmXnUJizNZdBT4EkjAKlpEiWcFl+r/IIruY00cBI7Nk0IImoMVZD308UFotFysPniaUqYvJPowGxa0cCIQLHR1iWvZdWYWEYK93D52mf+yPH4tKAYhkFCcdfKBT200H0ej2RxRUMDQOmw8oSp8EiWoTVAYXE4g+f9DvegrK/m7O5fXJ2eAycoW1QpK9vwWFwFqOEFCGCnj16HVrkYXxGsejsbR7hjagmD6TO5axSqRT2npoGTIsPn0eCYYK0LuFUHKdkHCQaV857vfvRaEgOIRV5igg6bE+BBKPGJM26VqsddE+U8XgEQKxlnnriBhEamJmeyXUNQnkEWIV8Pn9QPKUYNev3hWhg5AtsGqjLWBn8TmpTlT0IpNlsH7TOKEIADZGhLjgNjNXglNgGxLMIalAoeXLQOoOGwaDHjRukaWCltYbYqiurGOPcOLWmdruzn5VHQYFcA/LPDdKAOEZBXRIIGfbR0fFB5QyBhCI6DigmDbQPidXoyIEQ2yaolXK53Gg0Dypn1CGABrk1hRlGgkaDKdQHEYoSzBijGEzu9s1mq1KpHrROE/ARjDEHCWlgb4zoHOi62k7nuFKpHLROp2FkyK43zqWBsTagxTYJyWbRMWg4gTy217vPlA7gpti2bdl2DuLbXM5fXtybjjdNs3A+mUwdp2zgFWXSvOnkkykM9voK2CBmcSPB6o8Iy9FRx7Ls29vrDSoejFOtXq9WKpDoOiVqHcxbW2Pch9y/2729ve31elpPzJsWtiBOKnyigT47VpoGIRQ0SaPRgLt/efk1zfGP0O47nU776KjZbEa6BxnQOJ7AF71WO7m8vPz48eOg39d0kvP5PDg35TT4q3YQurX+/O9fOAcYCqs40UOsjd3LBhrG45FuG9But88vLlqtlmmaSvbZ7XZ///33m2v1hq1YdMrlCutBagb5UWDE9ozvB19WzK06aEBBYnvj/r57c3OzWi2V31ZoAefn589fvCgWizogAyB++89/7u/vlZqufK1WN9iP1UtAg49C5HPzzz/+EhiXoB0FzzzMrq+vh8OBQksAELz89tsUOsPAX/zvb7+pmvQB3qHRaNHatBIagsrvk6eIoEAfzRzbR8hlpKPR8Pr6irF0nngg8ubt23K5nF6tcDj85ZdflASVkF61Wm0iAapoMLCuS6QnYJR3xo5Turh4BhZSeg+WZb179+7Hn35KkwP3zEuln/71r4uLCyWFR90DpvENUDLFaQrxkHRFslar/fzzz2fn5xs5c7C6YIpef/ddUhDozxUypAZMiwyft4RNgmjBQLYgsSZyg2OfP3/+6vVrVQmCtMBpQMr667//LW1iaSPSyO8FBkUSawmR0xNHQcJHyO8tl0MSzfHs7Cwjhu309BTu5q+//ip3S4lTXBLSgH83UmBAiZ27Li8RK97+n3/+MzscPNBwdvbdmzeyjiaX/urzaM0kmHz1xLW+ctZavMAAQeL333/farWM7AmEkM9fvJCLOURiBZEuKzYN4aAEEdKSTbTsiCyXK0EOfvjxx3qjYWRVXr16JYFpuOqslYbwh+hpxnWW7qBIrwTcr+9/+KFazfToB7jFf3//Pm4UvLZGsH7bsOYgQgu7ZcJHcKMtMKFwi7dihgVkE3CqsfKa8OLhIrGCIA20+tKag9BmEkzZxsTZAPKFo6MjY0uk0WicC5ee3BQfm34e97n0EkNk0UMqssqWj2BPwoFwLGv5gkjQINgf5psE9lOyFNKAJZMxWrJ2HwH3gtGvA0Fi8nJe+gKRzdt370S2zOcLNF+g1TbILMCj20c4JYfmWYGS9+/fb+l8Ckgljo/5w//DMSb3CXpKaDCCtZjWB8lsTByn2G63zi/Oms2GTelWfvv27VYv2PDq9Ws2x95z6yx27hdrPR4hGrySkkVtySt2Q1fZHwFmoNVs2vmnWKlAQuH09LRzvN2TaiBcePbs2R9//EHbIBgLTqsZ49UhblnaEFtvPGIV0vYR7jizo9bJyXGYAxcFLMIC17CNIQIuL775Jlw2wM3G2fnZ42opHL+gyjb4+kfK8j+p8svxSYdYI8K9wHdv3kSy7S0VuAowDBTrWKrX681m8/mL51waEj1MnRTRI9loT0Ee0Wo3HcchbhmZdg15+cnJibEr8uz5c2LE4PZnPrqJ07NT/KappAErRKK0jIKJBYkOo2YMKISDo91wDWHDcIrVReAyAxQMd0ZhMxw36KfBROSZEvpvR7PFmkcLjSYABRKwjHc0yEQML15ENNTpdCI1qJPTE6JB1UED9pSYtHxE0Snm8xzH3/D6G+EaXr58aeycgFGMFM7x7mwImMrlSmo0IAkEkvuIssAKLH7eCCahlO5o1dQk3CtR8wTfplqrGoaZDg1I0iIkE5EyEdwaCKe/2UWTEEQDgUd4+e23lJjJiWhDEw28pTa0+QjLFnqo4ft//KO8oybhIU70gkeIhNrtNi3AxDWhiQZEGRmg10cIPr5s5xcFPjtzq0l/e/WKtsH6BF9dNBjeGDYkbxESiI65kdso4CD+xhzxtlgsaDpRSAN7WS69PmIPHyjFyCoZfyVNGFRGQ8RNoNSNgrvbHX4ArVoZjUbskXBJaIixLJc+HIaD4UHNItK775OasqmDBiTcklX6iPF4PJvODppmC9jOwWBAMezqaUBMNWv0Ebe3twdls+Xy6yVNqTpoQEktQgIv2Ov1D/qmyd1dt98f8JbvFhrEYIgNn0dxWrLiPOL25gaAOGgdF/ALXz5/4SqVkVCw4aDHChvyEavV6uuXS91r322ddO+6H/76KNjExdNLLg2WyNx3Lct4egI0XF/dDIejyNjG/ZTlcvnp4yfwC4GSqGMVo6Mdn1QkOCjSEFzCU4oI+bGvo+How3DkOMVSuVQoFGzb3vhyGRuRq6vrgIN0aAh/aD18j6VmTUYhutvRaAwvw+uDuXh2vocoDAcDoo/XR0P4DRIMB9JspDNP9rCKMJ3O4s54YSgq7oBpZMZtyarzCOL2g/5g31AIUutYNJA2luykQGJqTnt+RH8fUehxU3+tNMSYVJ+mj5jP53tVchgMhvPZnJkxxvUasWlA3oamipas2Efcd/eo3nB3dydQP4hbQ4xBA1ZtzJKPAKsw3Y8uK4gXg67aDdLwFDZmzUcYbt3tbh9QuL25EVS2VhqQjJZTyyMGw+l0uuMmYTzhdjulQwOKqiFLPgLk5nrH+7Kvrq5E1K+VhnAyGWO9PlOF3RCX8Xg8GOxsYtnr9f0C68Zp8FF46qNS5yMMQ916TWAY2Kt0baksFouryytx7eqjASHa0JWM+Qi4ZddXN7uHwuXXS+JKpRuyDRgKGfQRXvw46Pd3ashTt9v1HR/RFm7GNjxub8YmIUUfAQKGYWeyiclkcn11zb5qzTSEtkSsmdQbWaiNc0h3yNPXS2y20FaGCF8+f8Ef6qqcBuafTLwJIoLbyKSPAJnP5l+/fN3qEBII+Pzp88ztbjBFLGISGgSHwT18TioxZddHeKZ1CrYhzSdEK+bg85fxeEK71ZuiIeogottlz0c8VBpGY8jBto4G38Fh08I2TEO4EwqRU4us+ojHhGL4Zas8BXDw5fPXAVZg3jgNXr7AWuM50z4isA1gbLciioST/PTx83A4FMnuNmMb8En12+IjfJlOphCCZTzDhNP7+OHTeDzmhfoboCGyxAKiHT7jPsIXCMWhwWV29Fu/1//w10fikF1NNLC3j3ZFri8jiihnI2L/N+wjAjcMUeTl5VWmQoflYglB4iXWxaCbhiQDpi38a5sOzmWmXUBEBtFDq9UsVza/jBdYqZvrmyCOYdxS0p+il0+cZcSYEEGb8RLZIOieDj7HUTDCTxRTNIdO30y7tegMWmGv12+1m/l8fiMQQGRwc32LD9DNIA34s44tojnx/vZ4QiITpwR0nc7zrCFAgzCtXC7VG418ipMwAYLuXXfglQ24mpCgQfiLQtbdRyGCjmVkUZJaEVAJvJySU6tVaYvLq5LRcHR/34tYAuU0iDQM3jQ6jiGx2M1xu3wEriR45XI5CCAqlYpaIwFmAGICiFFotY10aGCrn0YD7h3c9x/+/EgMyx+3eNxwxYzi+ds8/FnY5q/Wd61AbNsugjjwv7C+NGaMcGQ8nkB8Oh6PZjOh9QaJimeYbtKfVqR7zfoW+1fC+p2UWEHeT2fKR5CKEK7489EAi7wrtuUJAjRyKAim/JawWCyXi8Xck+l0BmZAYlJvBm1DcI2RDSzaPX+abr3NPoKNRTrjZzNFA9E1GMy1mLCxr5mvNWVZRB4kHav6JF2WZhUf414ADwe1PmJ3JAs04A+sEl2WyzSV62Qfl9VRSoORhIZIF1RkA84az75R2ZyPkJlzt9M0yHdS0JZ2NgSX8Ny0jzjYBv5tFqSB3SkVKjHRo3v+sl2bzhK5Aj7SzkP+6OaNOe+pzzn4yP2PvJti+tODlsuVn0guQRZLL5d8yCZns/lsOlPV+Rkrp1DSSRGpNBN3a/HV5h7H2Fx/hMwagKDuQrGQz+cLRbd6IFhQ8oAw/a8bNrnENJ1OJ+Op93OifAyVPhrwfkj8V0vIHiFztVxltMmHLswpOUX3X1HTaqCAiOPJQ3FiOvMKj+PRcBS3Zz+O1pPSEHENNBosUTWqHMigEhgw8qVyCV6OU0x54U/X6eTtWq0KN2Y0Gg8HQ3iJO5F0aOC6hifLsbacMFlBj70Ry+WG+iMI28M1O6VSpVIGS5CdpV9dJoajfn8wGg4Fr47WvuJ8vqLoYK2WwO2nsMRbMQRXKwHkdfsIsNLVWrVaq8h1Kel2Ur6JWswXvV6/d9/jxhNabUO4psS1DevLffPUqM5LyAAD1rher5Ur5eyvAJ2zco1mvd6oDfqDbvee/UgcTTSQ0s5kYeP6ysHel1PPI8An15v1crlkbJXA7apUK/AaDIZ3N3eMjs24bUyIBmQacXqtrLitGJloyXtKpEIfYVkWQFCpbPczaAFieEEMAUDQHqyotgPTRIimCRoNVnR7shpDn5qGuTJXCnTNe6aAaUJMAGZ2Zx4IAEADEHe33fvuvbhHkKEhMqFFjAZLog3jYx+U+wjIDFvtluCjq7fLZTRbjWq1cn11HV6QSyEN7sADk9/oCGGjXCvm+jZpHwFBL9ws8K/G7gogfnJ20u/1iSuOJaThoaFGbr8ADRZhSwEfAW9BZ4lr8tEjFYvFdqcF8YGxBwK4F53i1dfryIzKJDQE2aPrxmM2xrV1GyVaMF3HojsO/Fqj2Tg5O94TDoKg+PT8BC6c5oVFPgz+FFGHafAnQ8d/+ix9b6yTi1E1Qsenx5CFG3spEBpDG4CbkIQG8rCUODQg8mYmT7km6wziEGHatn16fgpxorHH4jjO2cUZPlNDkIZAC0lokFruW4BHwR1CcAAB1F45BaazOMXncolMjuYMSxGjAcVWPNFGUGwDG4dSudQ56dADjr0TuBXgKPHJ4Awa2MMVY9GAqBtwfYSQbaB+CeLno07bPAyCw4LozvFRtVYVoeFxFJYh5ER4NCCpOE+QBuoOq7VKq908KJ4m7aNWrc6hwXwUhjpiZQEyxtmk6xo/Ofx0KpVys3XggCOtdquK1dnCo5YZI5ip9BAURkchiY9geQrzKT5oHbUOmhayDZ02MW4gtDdhR8ugAcnWAgRpWNth0Sm2DxzEEQiniutpNl5K4tYbBGmQjN5NHjwuC2ht2qVt216ceAgU4zUqiCLtx265IE6MW30SoQFxHICUjwiO97TAvGkCB4e8UUJyuVzn5JhmDBTSgPBRT4q5Ru5TTVtHbTvFlZF2TPJ5G2yDtNYFaZBvpqYwPJVKpVRyDhpNIhBuV+gJhRIaEN8BJPMRtmU3mvWDLpNLs9WwbUsfDcRJ9Sp9RLPdOISKqkLI9lE7idbZNCSK47g+olwtb2o1zd0MGgp5vCatigbEV7Osj8hZqF6rHfSnVhqNumXlxLUunmsgiloVmPR6vW6ig2tQ7SaQSRz1ZCRexyNpok/zEeAXnEPWoC2bKBQKymlAQmqO7yPqzYNr0Okm6EmZNA2IrlZ52+4vc3FQmD6BO1ykDwGUo0FBJRj3EXhf+0GUC3tUsMyAaVNQzcI+Il+wDyYhDcPgSl4hDYipVhkfUalUDnpKR4g1Bmka1HQVmk+1hJzu5y8c5CmVKJW4642I04C4bT+Wj4CTOyzfmGKRwRB5VpYgDYjn+uMptlQ+mIRURfCxaSI0IHWAumWlw+SWlMW2rXwhr4QGJNL2BX3Enk9221zEIGqJ2TQggfRQ1EcUDyhsQmIV+Bk0/L8AAwAdw6SH8J3kmAAAAABJRU5ErkJggg=="
      >
    </div>
    <div
      class="lazy-load"
      style="width: 250px;height: 150px;border: 1px solid blue;"
    >
      <img
        v-lazy="'none'"
        class="lazy-cover"
        :key="'none'"
        :data-img="'none'"
      >
    </div>
    <div>图片比例:</div>
    <div
      class="lazy-load"
      style="width: 250px;height: 150px;border: 1px solid blue;"
    >
      <img
        v-lazy="imgTest"
        class="lazy-contain"
        :key="imgTest"
        :data-img="imgTest"
        v-xy-pop-image:imgs="[imgTest,imgTest2,imgTest3]"
      >
    </div>
    <div
      class="lazy-load"
      style="width: 250px;height: 150px;border: 1px solid blue;"
    >
      <img
        v-lazy="imgTest2"
        class="lazy-contain"
        :key="imgTest2"
        :data-img="imgTest2"
        v-xy-pop-image:imgs="[imgTest,imgTest2,imgTest3]"
      >
    </div>
    <div
      class="lazy-load"
      style="width: 250px;height: 150px;border: 1px solid blue;"
    >
      <img
        v-lazy="imgTest3"
        class="lazy-contain"
        :key="imgTest3"
        :data-img="imgTest3"
        v-xy-pop-image:imgs="[imgTest,imgTest2,imgTest3]"
      >
    </div>
    <div
      class="lazy-load"
      style="width: 30px;height: 30px;border: 1px solid blue;"
    >
      <img
        v-lazy="imgTest2"
        class="lazy-cover"
        :key="imgTest2"
        :data-img="imgTest2"
        v-xy-pop-image:change="onPopChange"
      >
    </div>
    <!--<div class="lazy-load"-->
    <!--style="width: 200px;height: 200px;border: 1px solid green;">-->
    <!--<img v-lazy="imgTest3"-->
    <!--class="lazy-contain"-->
    <!--:key="imgTest3"-->
    <!--v-xy-pop-image:change="onPopChange">-->
    <!--</div>-->
    <button
      @click="onChangeImg"
      style="background-color: #eee;padding: 10px;"
    >更换图片</button>
    <xy-scale-slider
      width="640"
      height="290"
      interval="3"
      :imgs="imgs3"
      @on-change="onchange"
      v-xy-moving-btn
    ></xy-scale-slider>
    <div
      class="lazy-load"
      style="border-radius: 50%;width: 100px;height: 100px;"
      v-for="(item, index) in imgs2"
      :key="item.id"
    >
      <img v-lazy="item">
    </div>
    <div style="padding:0 15px;">
      <xy-article :des="des"></xy-article>
    </div>
    <div id="demo">
      <router-link
        tag="button"
        to="/page-progress"
        v-xy-moving-btn
      >路由加载</router-link>
      <router-view></router-view>
      <xy-list-status status="loading"></xy-list-status>
      <hr>
      <xy-list-status status="nomore"></xy-list-status>
      <hr>
      <xy-list-status status="nomore">
        <article
          slot="nomore"
          class="nomore"
        >
          <div>
            <div>
              <span>没更多商品了</span>
            </div>
          </div>
        </article>
      </xy-list-status>
      <hr>
      <xy-list-status status="empty"></xy-list-status>
      <hr>
      <xy-list-status status="empty">
        <img
          slot="empty"
          src="./nomore.png"
          alt="暂无内容"
          class="empty"
        >
      </xy-list-status>
      <div class="keepTopOther"></div>
      <div
        id="keepTop"
        v-xy-keep-top
      >
        <button v-xy-moving-btn>keep-top & moving-btn</button>
      </div>
      <div class="keepTopOther"></div>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import MessageBox from './lib/mint-ui/packages/message-box'
import Toast from './lib/mint-ui/packages/toast'
import Indicator from './lib/mint-ui/packages/indicator'

export default {
  name: 'app',
  data() {
    let now = (new Date()).getTime()
    return {
      //
      time1: new Date(now + 1000 * 60 * 60 * 24 * 2),
      time2: new Date(now + 1000 * 60 * 60 * 24 * 1 + 1000 * 5),
      time3: new Date(now + 1000 * 5),
      des2: `<p>　　原标题：（出访）习近平抵达阿布扎比开始对阿拉伯联合酋长国进行国事访问&nbsp;</p>
<div class="img_wrapper"><img src="http://dummyimage.com/336x280" alt="7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛在阿联酋副总统兼总理穆罕默德、阿布扎比王储穆罕默德陪同下前往检阅大厅。 新华社记者李学仁摄" data-mcesrc="http://www.xinhuanet.com/world/2018-07/20/1123151532_15320241862821n.jpg" data-mceselected="1" data-link=""><span class="img_descr">　　7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛在阿联酋副总统兼总理穆罕默德、阿布扎比王储穆罕默德陪同下前往检阅大厅。 新华社记者李学仁摄</span></div>
<p>　　新华社阿布扎比7月19日电（记者苏小坡　李忠发　郑开君）19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。&nbsp;</p>
<p>　　当习近平乘坐的专机进入阿联酋领空时，阿联酋空军12架战机升空护航。当地时间下午5时40分许，专机抵达阿布扎比总统机场。习近平和夫人彭丽媛步出舱门，阿联酋副总统兼总理穆罕默德、阿布扎比王储穆罕默德在廊桥口热情迎接。阿联酋儿童向习近平和彭丽媛献上鲜花。&nbsp;</p>
<p>　　穆罕默德副总统兼总理在机场为习近平举行迎接仪式。&nbsp;</p>
<p>　　习近平和彭丽媛在穆罕默德副总统兼总理、穆罕默德王储陪同下前往检阅大厅，仪仗队列队迎候。鸣21响礼炮。习近平和彭丽媛同穆罕默德副总统兼总理共同登上检阅台。军乐队奏中国国歌。国歌毕，习近平和彭丽媛在穆罕默德副总统兼总理、穆罕默德王储陪同下前往会见厅，同阿联酋主要内阁部长和重要王室成员等阿方迎接人员握手。穆罕默德副总统兼总理、穆罕默德王储同中方陪同人员握手。习近平同穆罕默德副总统兼总理、穆罕默德王储亲切交谈。&nbsp;</p>
<p>　　习近平代表中国政府和中国人民，向阿联酋政府和人民致以诚挚问候和良好祝愿。习近平指出，中阿建交34年来，两国始终相互尊重、平等相待，双边关系得到长足发展，各领域务实合作成果丰硕。阿联酋是我这次出访的第一站，也是我再次担任中国国家主席后访问的第一个国家，体现了中方对中阿关系的重视。刚刚抵达阿布扎比，我就感受到了阿联酋人民的热情友好，深受感动。我期待着同阿联酋领导人就发展两国关系深入交换意见。相信在双方共同努力下，这次访问将取得圆满成功，增进两国和两国人民友谊。&nbsp;</p>
<div class="img_wrapper"><img src="http://dummyimage.com/250x100" alt="7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛同阿联酋副总统兼总理穆罕默德共同登上检阅台。 新华社记者谢环驰摄" data-mcesrc="http://www.xinhuanet.com/world/2018-07/20/1123151532_15320241862891n.jpg" data-mceselected="1" data-link=""><span class="img_descr">　　7月19日，国家主席习近平乘专机抵达阿布扎比，开始对阿拉伯联合酋长国进行国事访问。阿联酋副总统兼总理穆罕默德在机场为习近平举行迎接仪式。这是习近平和夫人彭丽媛同阿联酋副总统兼总理穆罕默德共同登上检阅台。 新华社记者谢环驰摄</span></div>
<p>　　穆罕默德副总统兼总理和穆罕默德王储热烈欢迎习近平主席对阿联酋进行国事访问，表示习近平主席是阿联酋人民的老朋友、好朋友，很荣幸习近平主席选择阿联酋作为连任中国国家主席后首次出访的首站，阿方各界热切期盼习近平主席这次重要、历史性访问。相信习近平主席这次访问将有力促进阿中战略性关系进一步发展。&nbsp;</p>
<p>　　习近平和彭丽媛在穆罕默德副总统兼总理、穆罕默德王储陪同下离开会见厅。当地青年和儿童跳起阿联酋特色舞蹈，欢迎最尊贵的客人。&nbsp;</p>
<p>　　丁薛祥、杨洁篪、王毅、何立峰等陪同人员同机抵达。&nbsp;</p>
<p>　　中国驻阿联酋大使倪坚也到机场迎接。&nbsp;</p>
<p>　　在结束对阿联酋的国事访问后，习近平还将对塞内加尔、卢旺达、南非进行国事访问，出席在南非约翰内斯堡举行的金砖国家领导人第十次会晤，过境毛里求斯并进行友好访问。（完）</p>
<p class="show_author">责任编辑：张玉 </p>`,
      des: '<p><a href="http://www.12371.cn/special/lxyzby/" target="_blank"><img src="http://dummyimage.com/336x280"></a><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span></p><p><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'><img src=\'https://st.be-linker.com/data2/var/upload/ueditor/jsp/upload/image/20180723/1532281397085068136.jpg\' title=\'1532281397085068136.jpg\' alt=\'20170411_a5f378bc72ee57dc72869lsi6hl156v8_sp.jpg\'/></span></p><p><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持<img src=\'https://st.be-linker.com/data2/var/upload/ueditor/jsp/upload/image/20180726/1532563756668096323.png\' title=\'1532563756668096323.png\' alt=\'QQ截图20180117090358.png\' width=\'776\' height=\'428\' style=\'width: 776px; height: 428px;\'/></span></span></p><p><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span><span style=\'color: rgb(51, 51, 51); font-family: &quot;Arial Normal&quot;, Arial; font-size: 14px;\'>各级党委和政府要按照党中央部署和要求，按照“五位一体”总体布局和“四个全面”战略布局，坚持发展第一要务，坚持改革开放，坚持以新发展理念引领发展，坚持</span></span></span></p>',
      imgs0: [],
      imgs1: [
        {
          id: '1',
          name: '100*600',
          src: 'http://dummyimage.com/100x600',
          href: '#'
        }
      ],
      imgs2: [
        {
          id: '2',
          name: '200*600',
          src: 'http://dummyimage.com/200x600',
          href: '#'
        }, {
          id: '3',
          name: '200*600',
          src: 'http://dummyimage.com/200x600',
          href: 'https://www.baidu.com/'
        }
      ],
      imgs3: [
        {
          id: '4',
          name: '300*600',
          src: 'http://dummyimage.com/300x600',
          href: '#'
        }, {
          id: '5',
          name: '300*600',
          src: 'http://dummyimage.com/300x600',
          href: 'https://www.baidu.com/'
        }, {
          id: '6',
          name: '300*300',
          src: 'http://dummyimage.com/300x300',
          href: 'https://www.baidu.com/'
        }
      ],
      imgs4: [
        {
          id: '7',
          name: '400*600',
          src: 'http://dummyimage.com/400x600',
          href: '#'
        }, {
          id: '8',
          name: '400*600',
          src: 'http://dummyimage.com/400x600',
          href: '/page-progress'
        }, {
          id: '9',
          name: '400*300',
          src: 'http://dummyimage.com/400x300',
          href: '#'
        }, {
          id: '10',
          name: '400*200',
          src: 'http://dummyimage.com/400x200',
          href: '#'
        }
      ],
      imgs: [],
      count: 1,
      imgTest: 'https://placeimg.com/927/582/any?' + (new Date()).getTime(),
      imgTest2: 'https://placeimg.com/70/150/any?' + (new Date()).getTime(),
      imgTest3: 'https://placeimg.com/90/150/any?' + (new Date()).getTime(),
      username: '',
      password: '',
      captcha: ''
    }
  },
  methods: {
    onbottom() {
      //        alert('onbottom')
    },
    onchange(item, index, total) {
      //        console.log('onchange', item, index, total)
    },
    onPullRefresh(stop) {
      setTimeout(function () {
        stop()
      }, 2000)
    },
    onChangeImg() {
      let that = this
      that.imgTest = `https://placeimg.com/${that.count * 100}/1500/any?` + (new Date()).getTime()
      that.imgTest2 = `https://placeimg.com/1500/${that.count * 100}/any?` + (new Date()).getTime()
      that.imgTest3 = `https://placeimg.com/${that.count * 100}/${that.count * 100}/any?` + (new Date()).getTime()
      that.count++
    },
    onPopChange(type, data) {
      let that = this
      //        debugger
      // 这里有setter, 可以改变预览图
      data.img = that.imgTest3
    },
    onFinish() {
      console.log('倒数结束')
    }
  },
  mounted: function () {
    let that = this
    console.log('index mounted')
    //      setTimeout(function () {
    //        that.imgs = that.imgs1
    //        console.log('1')
    //      }, 2000)
    //      setTimeout(function () {
    //        that.imgs = that.imgs2
    //        console.log('2')
    //      }, 4000)
    //      setTimeout(function () {
    //        that.imgs = that.imgs3
    //        console.log('3')
    //      }, 6000)
    //      setTimeout(function () {
    //        that.imgs = that.imgs4
    //        console.log('4')
    //      }, 8000)
    //      setTimeout(function () {
    //        that.imgs = that.imgs0
    //        console.log('5')
    //      }, 8000)

    //      setTimeout(function () {
    //        Indicator.open()
    //      }, 2000)
    //      setTimeout(function () {
    //        Toast({
    //          message: 'toast',
    //          duration: 2000
    //        })
    //      }, 4000)
    //      setTimeout(function () {
    //        MessageBox({
    //          title: '出错',
    //          message: 'message-box'
    //        })
    //      }, 6000)

    //      setTimeout(function () {
    //        that.$indicator.open()
    //      }, 2000)
    //      setTimeout(function () {
    //        that.$toast({
    //          message: 'toast',
    //          duration: 2000
    //        })
    //      }, 4000)
    //      setTimeout(function () {
    //        that.$messageBox({
    //          title: '出错',
    //          message: 'message-box'
    //        })
    //      }, 6000)
    //      that.$toast({
    //        message: '已添加',
    //        duration: 100000,
    //        iconClass: 'mintui mintui-success xy-mintui-extend-icon'
    //      })
    //      that.$toast({
    //        message: '失败',
    //        duration: 100000,
    //        iconClass: 'mintui mintui-field-error xy-mintui-extend-icon'
    //      })
    //      console.log(that.$formatDate(new Date(), 'yyyy-MM-dd'))
    //      console.log(that.$relativeDate(new Date()))

    //      setTimeout(function () {
    //        that.imgs3 = that.imgs4
    //        debugger
    //      }, 3000)

    setTimeout(function () {
      //        debugger
      // 这里update, 也可以改变预览图
      //        that.imgTest = that.imgTest2
    }, 3000)
    setTimeout(function () {
      //        debugger
      // 这里update, 也可以改变预览图
      //        that.imgTest = that.imgTest3
    }, 8000)
  }
}
</script>

<style lang="scss">
@import './lib/mint-ui/lib/style.css';
@import './lib/scss/mixin';

body {
  margin: 0;
  position: relative;
}

#demo {
  /*height: 200vh;*/
  /*background: linear-gradient(black 0%, black 10%, white 10%, white 20%, black 20%, black 30%, white 30%, white 40%, black 40%, black 50%, white 50%, white 60%, black 60%, black 70%, white 70%, white 80%, black 80%, black 90%, white 90%, white 100%);*/
  .keepTopOther {
    height: 10vh;
    background-color: blue;
  }

  #keepTop {
    height: 10vh;
    background-color: yellow;
    line-height: 10vh;
    text-align: center;
  }
}

.cats {
  $cats-w: red;
  margin-top: 10px;
  @include well-out;
  & > div {
    font-size: 16px;
    padding: rsh(35) 0 rsh(30) 0;
    height: rsh(100);
    background-color: yellow;
    text-align: center;
  }
  &.cats--empty {
    & > div {
      @include well-item(3, 1, blue);
    }
  }
  &.cats--tb {
    & > div {
      @include well-item(3, 1, blue, 'tb');
    }
  }
}

img.empty {
  width: rsh(212);
  height: rsh(220);
}

article.nomore {
  background-color: #fff;
  display: flex;
  justify-content: center;
  font-style: normal;
  & > div {
    text-align: center;
    margin: 0 auto;
    position: relative;
    color: #cc9054;
    font-weight: 300;
    font-size: rsh(32);
    line-height: rsh(38 * 2);
    padding: 0 rsh(20);

    &:after {
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #cc9054;
      left: 0;
      top: 50%;
      z-index: 1;
      transform: scale(1, 0.5);
      margin-top: -1px;
    }

    & > div {
      position: relative;
      width: auto;
      z-index: 2;
      background-color: #fff;
      margin: 0 auto;
      padding: 0 rsh(10);
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        margin: 0 rsh(7 * 2);
        text-align: center;
      }
      &:after,
      &:before {
        content: '';
        vertical-align: middle;
        color: #cc9054;
        font-size: rsh(12 * 2);
        width: rsh(6 * 2);
        height: rsh(6 * 2);
        text-align: center;
        transform: scale(0.6, 1) rotate(45deg);
        position: relative;
        background-color: #cc9054;
      }
    }
    &.footer-title {
      width: rsh(150 * 2);
      & > div {
        width: rsh((16 * 6 + 6 * 4 + 3 * 3) * 2);
      }
    }
  }
}
</style>
