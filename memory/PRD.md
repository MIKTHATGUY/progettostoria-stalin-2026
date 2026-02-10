# ARCHIVIO 1937: LA FABBRICA DEL CONSENSO

## Project Overview
Educational historical website about Soviet totalitarianism and Stalinism for a school project (Classe V - Anno Scolastico 2024/2025).

## Tech Stack
- **Frontend**: React 19 + Tailwind CSS
- **Backend**: FastAPI + Python
- **Database**: MongoDB
- **UI Components**: Shadcn/UI + Lucide Icons
- **Fonts**: Oswald (headings) + Courier Prime (body)
- **Design Theme**: Bureaucratic Noir / Soviet Document Style

## User Personas
1. **Students**: High school students studying 20th century history
2. **Teachers**: History teachers evaluating student projects
3. **General Public**: Anyone interested in Soviet history

## Core Requirements (Static)
- [x] Immersive "secret document" atmosphere
- [x] Italian language throughout
- [x] Interactive propaganda vs reality comparisons
- [x] Video analysis with historical context
- [x] Interactive survival quiz
- [x] Comprehensive historical timeline
- [x] Interactive Gulag map
- [x] Detailed chapter-by-chapter content

## What's Been Implemented

### January 30, 2025
- **Initial MVP**: Homepage, Pravda, Cinema, Quiz pages
- **Design**: Dark theme, Soviet document aesthetic, grain overlay
- **Backend**: Quiz submission API with MongoDB storage

### February 7, 2025
- **Expanded Content**: Added 7 new comprehensive chapters
  - Genesi (Lenin's Testament, power seizure)
  - Economia (Five Year Plans, Collectivization, Holodomor)
  - Terrore (Great Terror, Moscow Trials, Article 58)
  - Cultura (Cult of Personality, Socialist Realism, Lysenko)
  - Guerra (Comintern, WWII, Molotov-Ribbentrop)
  - TardoStalinismo (Post-war, Doctors' Plot, Death)
  - Conclusione (Human costs, legacy, bibliography)
- **Navigation**: Dropdown menu for chapters
- **Cronologia**: Interactive timeline 1924-1953
- **Mappa Gulag**: Interactive map with 4 camp locations

## Pages (13 total)
1. `/` - Homepage (Landing)
2. `/pravda` - Pravda vs Realtà (Flip cards)
3. `/cinema` - Cine-Analisi (Video analysis)
4. `/quiz` - Test di Sopravvivenza (Interactive quiz)
5. `/cronologia` - Cronologia di un Incubo (Timeline)
6. `/mappa` - L'Arcipelago Gulag (Interactive map)
7. `/genesi` - Cap. I: La Presa del Potere
8. `/economia` - Cap. II: Economia e Società
9. `/terrore` - Cap. III: Il Totalitarismo Perfetto
10. `/cultura` - Cap. IV: Cultura e Propaganda
11. `/guerra` - Cap. V: Politica Estera e Guerra
12. `/tardostalinismo` - Cap. VI: Il Tardo Stalinismo
13. `/conclusione` - Bilancio dello Stalinismo

## API Endpoints
- `GET /api/` - Health check
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/quiz/stats` - Get quiz statistics
- `GET /api/quiz/results` - Get recent results

## Prioritized Backlog

### P0 (Critical) - DONE
- All pages implemented and functional
- Quiz logic working correctly
- Navigation complete

### P1 (Important)
- [ ] Add more historical images
- [ ] Embed actual YouTube videos (currently placeholders)
- [ ] Mobile optimization improvements

### P2 (Nice to have)
- [ ] Audio narration option
- [ ] Print-friendly version
- [ ] Additional quiz questions
- [ ] Progress tracking across chapters

## Next Tasks
1. Find and embed actual YouTube clips from the mentioned films
2. Add more authentic Soviet propaganda images
3. Consider adding a "Resources for Teachers" section
4. Mobile navigation improvements
