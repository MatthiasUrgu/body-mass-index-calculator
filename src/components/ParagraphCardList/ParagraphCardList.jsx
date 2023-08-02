
import ParagraphCard from 'components/ParagraphCard/ParagraphCard';
import s from "./style.module.scss"
function ParagraphCardList() {
    return (
        <section className={s.cardContainer}>
            
            <ParagraphCard logo=""
            title="Gender"
            content="loremclc,lcqllcnocnicnsskvdckvnlsdkjbklsdvnklsvkdskvnvklsvnvslvkvssdsvsvsvsdvsvsvv"/>
            <ParagraphCard logo=""
            title="Age"
            content="loremclc"/>
            <ParagraphCard logo=""
            title="Muscle"
            />
            <ParagraphCard logo=""
            title="Pregnancy"
            content=""/>
            <ParagraphCard logo=""
            title="Race"
            content=""/>
            
        </section>
    );
}

export default ParagraphCardList;