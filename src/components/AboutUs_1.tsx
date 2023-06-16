
import { useTranslation } from "react-i18next"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box
} from "@chakra-ui/react"

function AboutUs_1() {

    const [t, i18n] = useTranslation()

    return (
        <section className="w-full px-4 lg:px-10 grid grid-cols-1 gap-6 gap-y-12 lg:grid-cols-[35%_65%] place-items-center max-lg:mt-16 lg:-translate-y-10">

            <img
                alt=""
                src={import.meta.env.BASE_URL+"/assets/images/abount-img-1.jpg"}
                className="w-full h-auto object-center object-cover rounded-sm max-lg:hidden"
            />

            <div className="flex flex-col gap-y-6 w-full">

                <p className="text-5xl font-normal text-slate-800 tracking-wide">{t("home.about-us.title")}</p>
                <p className="text-base text-slate-700/80 tracking-wide font-medium max-w-prose">
                    {t("home.about-us.subtitle")}
                </p>
                <p className="text-2xl font-normal text-slate-800 tracking-wide">{t("home.awards.title")}</p>

                <Accordion className="max-lg:hidden" minW="42rem" maxW="42rem" allowMultiple defaultIndex={[0]}>

                    {
                        (():any => t("home.awards.items"))()?.map((item:any, i:number) => (
                            <AccordionItem key={i}>
                                <AccordionButton _expanded={{color: "blackAlpha.900"}} color="blackAlpha.800" fontWeight="medium" letterSpacing="wide" textAlign={i18n.dir(i18n.language) === "ltr" ? "left" : "right"}>
                                    <Box flexGrow={1}>
                                        {item?.name}
                                        &nbsp;/&nbsp;
                                        {item?.date}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel>
                                    <p className="text-sm text-slate-800 font-normal leading-5">
                                        {item?.description}
                                    </p>
                                </AccordionPanel>
                            </AccordionItem>
                        ))
                    }

                    
                </Accordion>


            </div>

        </section>
    )
}

export default AboutUs_1