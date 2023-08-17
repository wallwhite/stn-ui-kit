import { Accordion, AccordionItem } from '../src';

export default {
  title: 'Components/Accordion',
  component: AccordionItem,
  tags: ['autodocs'],
};

export const Default = () => (
  <Accordion>
    <AccordionItem id="1" title="Accordion Item 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl id tempor pretium, magna est
      tincidunt magna, ut laoreet elit ante quis massa. Nulla facilisi. Donec ut ligula vitae nunc ultricies
    </AccordionItem>
    <AccordionItem id="2" title="Accordion Item 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl id tempor pretium, magna est
      tincidunt magna, ut laoreet elit ante quis massa. Nulla facilisi. Donec ut ligula vitae nunc ultricies
    </AccordionItem>
    <AccordionItem id="3" title="Accordion Item 3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl id tempor pretium, magna est
      tincidunt magna, ut laoreet elit ante quis massa. Nulla facilisi. Donec ut ligula vitae nunc ultricies
    </AccordionItem>
  </Accordion>
);
