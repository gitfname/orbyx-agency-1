
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

function AwardsAccordion() {

    const [t, i18n] = useTranslation()

    return (
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
    )
}

export default AwardsAccordion