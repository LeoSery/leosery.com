# Rapport d'Audit de Sécurité - leosery.com

**Date:** 2025-01-27  
**Repository:** LeoSery/leosery.com  
**Analysé par:** GitHub Copilot Agent

---

## Résumé Exécutif

L'audit de sécurité a identifié **27 vulnérabilités** dans les dépendances du projet :
- **1 vulnérabilité CRITIQUE** ✅ **RÉSOLUE**
- **19 vulnérabilités ÉLEVÉES (HIGH)** ⚠️ **RESTANTES**
- **4 vulnérabilités MODÉRÉES** ✅ **2 RÉSOLUES**, ⚠️ **2 RESTANTES**
- **3 vulnérabilités FAIBLES (LOW)** ✅ **RÉSOLUES**

**Mise à jour:** Les correctifs automatiques ont été appliqués avec succès. **5 vulnérabilités résolues**, dont la vulnérabilité CRITIQUE. Il reste **22 vulnérabilités** nécessitant une attention particulière (voir détails ci-dessous).

## Vulnérabilités Identifiées

### 🔴 CRITIQUE - Next.js (15.0.0-canary.0 - 15.4.6)

**Packages affectés:** `next`  
**Version actuelle:** 15.1.0  
**Sévérité:** Critique

#### Problèmes identifiés :
1. **DoS via Server Actions** - [GHSA-7m27-7ghc-44w9](https://github.com/advisories/GHSA-7m27-7ghc-44w9)
2. **Race Condition to Cache Poisoning** - [GHSA-qpjv-v59x-3qc4](https://github.com/advisories/GHSA-qpjv-v59x-3qc4)
3. **Information Exposure in Dev Server** - [GHSA-3h52-269p-cp9r](https://github.com/advisories/GHSA-3h52-269p-cp9r)
4. **DoS via Cache Poisoning** - [GHSA-67rr-84xm-4c7r](https://github.com/advisories/GHSA-67rr-84xm-4c7r)
5. **Cache Key Confusion for Image Optimization** - [GHSA-g5qg-72qw-gw5v](https://github.com/advisories/GHSA-g5qg-72qw-gw5v)
6. **Authorization Bypass in Middleware** - [GHSA-f82v-jwr5-mffw](https://github.com/advisories/GHSA-f82v-jwr5-mffw)
7. **Content Injection for Image Optimization** - [GHSA-xv57-4mr9-wg8v](https://github.com/advisories/GHSA-xv57-4mr9-wg8v)
8. **Improper Middleware Redirect - SSRF** - [GHSA-4342-x723-ch2f](https://github.com/advisories/GHSA-4342-x723-ch2f)

#### Impact :
- Déni de service (DoS) potentiel
- Empoisonnement du cache
- Exposition d'informations sensibles
- Contournement d'autorisation
- Injection de contenu
- SSRF (Server-Side Request Forgery)

#### Solution :
✅ **FIX APPLIQUÉ** - Mise à jour vers Next.js 15.5.4 effectuée avec succès
- **Version avant:** 15.1.0
- **Version après:** 15.5.4
- **Status:** ✅ RÉSOLU
```bash
npm audit fix  # ✅ Déjà exécuté
```

---

### 🟠 ÉLEVÉ (HIGH) - PDF.js (pdfjs-dist ≤4.1.392)

**Packages affectés:** `pdfjs-dist` et tous les modules `@react-pdf-viewer/*`  
**Version actuelle:** 2.16.105  
**Sévérité:** Élevée

#### Problème identifié :
**Exécution arbitraire de JavaScript** - [GHSA-wgrm-67xf-hhpq](https://github.com/advisories/GHSA-wgrm-67xf-hhpq)

#### Impact :
Lors de l'ouverture d'un PDF malveillant, du code JavaScript arbitraire peut être exécuté, compromettant la sécurité de l'application et potentiellement les données utilisateur.

#### Solution :
❌ **AUCUN FIX AUTOMATIQUE DISPONIBLE**

**Options disponibles :**

1. **Option 1 - Attendre une mise à jour (Recommandé si fonctionnalité critique)**
   - Surveiller les mises à jour de `pdfjs-dist`
   - Surveiller les mises à jour de `@react-pdf-viewer/core` et modules associés
   - Les packages `@react-pdf-viewer` sont bloqués à la version 3.12.0

2. **Option 2 - Remplacer la bibliothèque PDF (Solution temporaire)**
   - Considérer des alternatives comme :
     - `react-pdf` (de wojtekmaj) - Plus activement maintenu
     - `pdf-lib` pour la manipulation de PDF
     - Solutions backend pour le rendu PDF

3. **Option 3 - Mesures d'atténuation**
   - Ne permettre que l'upload de PDFs depuis des sources fiables
   - Implémenter une validation stricte des PDF côté serveur
   - Isoler le rendu PDF dans un sandbox ou iframe avec restrictions
   - Utiliser Content Security Policy (CSP) stricte

**Modules affectés :**
- `@react-pdf-viewer/core`
- `@react-pdf-viewer/default-layout`
- `@react-pdf-viewer/search`
- `@react-pdf-viewer/theme`
- `@react-pdf-viewer/toolbar`
- Et 12 autres modules associés

---

### 🟡 MODÉRÉ - Autres Vulnérabilités

#### 1. PrismJS (prismjs <1.30.0)
**Package affecté:** `prismjs` (dépendance de `react-syntax-highlighter`)  
**Sévérité:** Modérée

**Problème:** DOM Clobbering vulnerability - [GHSA-x7hr-w5r2-h6wg](https://github.com/advisories/GHSA-x7hr-w5r2-h6wg)

**Impact:** Vulnérabilité de manipulation du DOM permettant potentiellement l'injection de code.

**Solution:**
⚠️ **FIX AVEC BREAKING CHANGES**
```bash
npm audit fix --force
```
Cela installera `react-syntax-highlighter@5.8.0` (changement majeur depuis 15.6.1)

**Alternative:** Mettre à jour manuellement vers une version plus récente sans breaking changes si disponible.

---

#### 2. nanoid (<3.3.8)
**Package affecté:** `nanoid`  
**Sévérité:** Modérée

**Problème:** Résultats prévisibles lors de la génération avec des valeurs non-entières - [GHSA-mwcw-c2x4-8c55](https://github.com/advisories/GHSA-mwcw-c2x4-8c55)

**Impact:** Génération d'IDs potentiellement prévisibles, réduisant la sécurité.

**Solution:**
✅ **FIX APPLIQUÉ**
- **Status:** ✅ RÉSOLU - Mise à jour vers nanoid 3.3.11 effectuée

---

#### 3. brace-expansion (versions multiples affectées)
**Packages affectés:** `brace-expansion` (plusieurs instances)  
**Sévérité:** Modérée

**Problème:** Regular Expression Denial of Service (ReDoS) - [GHSA-v6h2-p8h4-qcjw](https://github.com/advisories/GHSA-v6h2-p8h4-qcjw)

**Impact:** Possibilité de déni de service via des expressions régulières malicieuses.

**Solution:**
✅ **FIX APPLIQUÉ**
- **Status:** ✅ RÉSOLU - Mise à jour vers brace-expansion 1.1.12 effectuée

---

### 🔵 FAIBLE (LOW) - @eslint/plugin-kit (<0.3.4)

**Package affecté:** `@eslint/plugin-kit` (dépendance de `eslint`)  
**Sévérité:** Faible

**Problème:** ReDoS via ConfigCommentParser - [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7)

**Impact:** Vulnérabilité ReDoS (CWE-1333) - impact limité car uniquement dans l'environnement de développement.

**Solution:**
✅ **FIX APPLIQUÉ**
- **Status:** ✅ RÉSOLU - Mise à jour vers ESLint 9.36.0 et @eslint/plugin-kit 0.3.5 effectuée

---

## Plan d'Action Recommandé

### Phase 1 - Corrections Immédiates (Sans Breaking Changes) ✅ TERMINÉE

La commande `npm audit fix` a été exécutée avec succès :

**Corrections appliquées :**
- ✅ Next.js → 15.5.4 (CRITIQUE - RÉSOLU)
- ✅ nanoid → 3.3.11 (MODÉRÉ - RÉSOLU)
- ✅ brace-expansion → 1.1.12 (MODÉRÉ - RÉSOLU)
- ✅ @eslint/plugin-kit → 0.3.5 (FAIBLE - RÉSOLU)
- ✅ eslint → 9.36.0 (FAIBLE - RÉSOLU)

**Résultat:** 5 vulnérabilités résolues (dont 1 critique)

**Validation:**
- ✅ Build de production réussi
- ✅ Linting sans erreurs
- ✅ Aucun breaking change introduit

---

### Phase 2 - Analyse et Décision pour PDF.js

**Problème majeur restant:** Vulnérabilité ÉLEVÉE dans pdfjs-dist

**Options à considérer :**

#### Option A - Continuer avec pdfjs-dist (Court terme)
**Avantages:**
- Pas de refactoring nécessaire
- Fonctionnalité existante préservée

**Inconvénients:**
- Vulnérabilité de sécurité élevée non résolue
- Risque d'exécution de code malveillant via PDF

**Actions d'atténuation:**
1. Implémenter des mesures de sécurité :
   ```javascript
   // Exemple: Ajouter Content Security Policy
   // Dans next.config.js
   module.exports = {
     async headers() {
       return [
         {
           source: '/:path*',
           headers: [
             {
               key: 'Content-Security-Policy',
               value: "script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none';"
             }
           ]
         }
       ]
     }
   }
   ```

2. Valider tous les PDFs côté serveur avant affichage
3. Documenter le risque pour les parties prenantes

#### Option B - Migration vers react-pdf (Recommandé - Moyen terme)
**Avantages:**
- Bibliothèque plus maintenue et sécurisée
- Meilleure intégration React
- Communauté active

**Inconvénients:**
- Nécessite refactoring du code
- Testing requis

**Fichiers à modifier:**
- `components/Common/GitHubReadme.jsx` (si utilisé)
- `components/Projects/ProjectTemplate.jsx` (composant PDFModal)
- `package.json` (dépendances)

#### Option C - Supprimer la fonctionnalité PDF (Si non critique)
Si la visualisation PDF n'est pas essentielle au portfolio, considérer son retrait.

---

### Phase 3 - PrismJS (Optionnel)

Si `react-syntax-highlighter` est critique pour la coloration syntaxique :

```bash
# Vérifier d'abord les breaking changes
npm audit fix --force --dry-run

# Puis appliquer si acceptable
npm audit fix --force
```

**Alternative:** Mettre à jour manuellement à une version compatible.

---

## Commandes de Résolution

### Résolution Minimale (Recommandé pour démarrer)
```bash
# Correction automatique des vulnérabilités sans breaking changes
npm audit fix

# Vérifier les résultats
npm audit

# Tester l'application
npm run build
npm run dev
```

### Résolution Complète (Avec breaking changes - À tester)
```bash
# Sauvegarde du package-lock.json
cp package-lock.json package-lock.json.backup

# Appliquer tous les correctifs
npm audit fix --force

# Tester minutieusement
npm run build
npm run dev

# Si problèmes, restaurer
mv package-lock.json.backup package-lock.json
npm install
```

---

## Suivi et Maintenance

### Actions Recommandées

1. **Immediate:**
   - Exécuter `npm audit fix`
   - Tester l'application
   - Déployer les mises à jour

2. **Court terme (1-2 semaines):**
   - Décider sur la stratégie PDF.js
   - Implémenter des mesures d'atténuation si maintien de PDF.js
   - Ou planifier la migration vers une alternative

3. **Moyen terme (1 mois):**
   - Résoudre la vulnérabilité PrismJS
   - Mettre en place un processus de monitoring de sécurité

4. **Long terme:**
   - Automatiser les audits de sécurité (GitHub Dependabot)
   - Réviser régulièrement les dépendances (mensuel)
   - Mettre en place des tests de sécurité dans la CI/CD

### Outils de Monitoring Recommandés

- **GitHub Dependabot:** Activer les alertes automatiques
- **Snyk:** Pour des analyses plus approfondies
- **npm audit:** À exécuter régulièrement

---

## Conclusion

Le projet présente des vulnérabilités de sécurité qu'il faut adresser :

**Priorité CRITIQUE:**
- ✅ Next.js - Corrigeable immédiatement avec `npm audit fix`

**Priorité ÉLEVÉE:**
- ⚠️ PDF.js - Nécessite une décision stratégique (continuer avec mesures d'atténuation ou migrer)

**Priorité MODÉRÉE:**
- ✅ nanoid, brace-expansion - Corrigeables immédiatement
- ⚠️ PrismJS - Nécessite évaluation des breaking changes

**Recommandation finale:** Commencer par exécuter `npm audit fix` pour résoudre les vulnérabilités critiques et modérées facilement corrigeables (sauf PrismJS), puis décider d'une stratégie pour PDF.js en fonction de l'importance de cette fonctionnalité dans le portfolio.

---

## Annexe - Références

- [GitHub Security Advisories](https://github.com/advisories)
- [npm audit documentation](https://docs.npmjs.com/cli/v8/commands/npm-audit)
- [OWASP Dependency Check](https://owasp.org/www-project-dependency-check/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
