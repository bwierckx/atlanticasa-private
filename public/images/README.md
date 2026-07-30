# Afbeeldingen — te vervangen placeholders

De website gebruikt op dit moment **rustige, aardse gradient-placeholders** in
plaats van foto's, zodat er geen binaire beelden nodig zijn om te bouwen. Zodra
u definitieve fotografie heeft, plaatst u de bestanden in deze map en zet u de
`src` in de betreffende component.

## Hoe vervangt u een placeholder?

Elke plek waar beeld hoort, gebruikt de component `Media`
(`src/components/ui/Media.tsx`). In de secties staat de juiste regel al klaar,
uitgecommentarieerd. Voorbeeld:

```tsx
<Media
  // src="/images/portugal.jpg"   ← verwijder de // en vul het pad in
  alt="Portugees kustlandschap met verfijnde architectuur"
  caption="Kust, stad en geselecteerde ontwikkellocaties"
/>
```

`Media` gebruikt automatisch `next/image` zodra `src` is ingevuld, inclusief
optimalisatie en `object-cover`.

## Aanbevolen beelden en afmetingen

| Bestand                    | Gebruikt in            | Aanbevolen formaat | Onderwerp                                            |
| -------------------------- | ---------------------- | ------------------ | ---------------------------------------------------- |
| `hero.jpg`                 | Hero-sectie            | 2400 × 1600 px     | Kustlandschap of verfijnd vastgoed, warm avondlicht  |
| `portugal.jpg`             | Portugal-blok          | 1200 × 1500 px     | Algarve / Comporta / Lissabon, architectuur & natuur |
| `spanje.jpg`               | Spanje-blok            | 1200 × 1500 px     | Costa del Sol / Marbella, luxe residentieel          |
| `private-meeting.jpg`      | Private meetings       | 1400 × 1120 px     | Zorgvuldig gedekte tafel, natuurlijk licht           |
| `team-1.jpg` … `team-3.jpg`| Organisatie / team     | 900 × 1200 px      | Portretten teamleden                                 |

> De Open Graph-afbeelding wordt **automatisch gegenereerd** in de huisstijl via
> `src/app/opengraph-image.tsx`. Wilt u een eigen foto als OG-beeld? Vervang dan
> de inhoud van dat bestand of lever een 1200 × 630 px afbeelding aan.

## Beeldrichtlijnen

Wel: Portugese en Spaanse architectuur, kustlandschappen, moderne villa's,
authentieke stadswoningen, rustige zakelijke gesprekken, detailfoto's van steen,
hout en linnen.

Niet: mensen die overdreven naar grafieken wijzen, stapels contant geld,
champagne- of jachtclichés, luxe sportauto's, gouden munten.
