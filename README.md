## Slip Through the Chat: Subtle Injection of False Information in LLM Chatbot Conversation Increases False Memory Formation

![teaser figure](https://github.com/user-attachments/assets/9a8df504-098b-460a-b185-3df920f4ba28)

## Author
- Pat Pataranutaporn
- Chayapatr Archiwaranguprok
- Samamtha W. T. Chan
- Elizabeth F. Loftus
- Pattie Maes

## Abstract
This study examines the potential for malicious generative chatbots to induce false memories by injecting subtle misinformation during user interactions. An experiment involving 180 participants explored five intervention conditions following the article presentation: (1) no intervention, reading an (2) honest or (3) misleading article summary, discussing the article with a (4) honest or (5) misleading chatbot. Results revealed that while the misleading summary condition increased false memory occurrence, misleading chatbot interactions led to significantly higher rates of false recollection. These findings highlight the emerging risks associated with conversational AI as it becomes more prevalent. The paper concludes by discussing implications and proposing future research directions to address this concerning phenomenon.


## Repository Structure
```
├── README.md
├── analysis                # Data analysis (Python)
│   ├── main.ipynb
│   ├── moderating.ipynb
│   └── pilot.ipynb
├── data                    # Survey data
│   ├── data-final.csv
│   └── data-pilot.csv
└── src                     # Chat web interface (Svelte)
```

## Usage (Data Analysis)

**Requirements**
- ipykernel==6.29.5
- matplotlib==3.10.0
- numpy==2.2.2
- pandas==2.2.3
- scikit-posthocs==0.11.2
- scipy==1.15.1

## Usage (Chat web interface)

```
pnpm install                # install node modules
pnpm run dev                # run locally
```

**note**: the web is designed for deployment on Cloudflare Pages

**Variables and Secrets**
```
- API_KEY                   OpenAI API Key (sk-proj-...)
- NODE_VERSION              22.0.0
```


## Citation
If you use this code or data in your research, please cite:

```
@inproceedings{10.1145/3708359.3712112,
author = {Pataranutaporn, Pat and Archiwaranguprok, Chayapatr and Chan, Samantha W. T. and Loftus, Elizabeth and Maes, Pattie},
title = {Slip Through the Chat: Subtle Injection of False Information in LLM Chatbot Conversations Increases False Memory Formation},
year = {2025},
isbn = {9798400713064},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3708359.3712112},
doi = {10.1145/3708359.3712112},
abstract = {This study examines the potential for malicious generative chatbots to induce false memories by injecting subtle misinformation during user interactions. An experiment involving 180 participants explored five intervention conditions following the presentation of an article: (1) no intervention, (2) reading an honest or (3) misleading article summary, (4) discussing the article with an honest or (5) misleading chatbot. Results revealed that while the misleading summary condition increased false memory occurrence, misleading chatbot interactions led to significantly higher rates of false recollection. These findings highlight the emerging risks associated with conversational AI as it becomes more prevalent. The paper concludes by discussing implications and proposing future research directions to address this concerning phenomenon.},
booktitle = {Proceedings of the 30th International Conference on Intelligent User Interfaces},
pages = {1297–1313},
numpages = {17},
keywords = {False Memory, AI-generated Media, Misinformation, Generative AI, Chatbot, Human-AI Interaction},
location = {
},
series = {IUI '25}
}
```

## Contact
For questions about the code or data, please contact: patpat[at]mit.edu / pub[at]from.pub
