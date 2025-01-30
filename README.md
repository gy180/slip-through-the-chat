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
@article{pataranutaporn2025slip,
  title={Slip Through the Chat: Subtle Injection of False Information in LLM Chatbot Conversation Increases False Memory Formation},
  author={Pataranutaporn, Pat and Archiwaranguprok, Chayapatr and Chan, Samantha W. T. and Loftus, Elizabeth F. and Maes, Pattie},
  year={2025},
  publisher={forthcoming}
}
```

### Contact
---
For questions about the code or data, please contact: patpat[at]mit.edu / pub[at]from.pub
