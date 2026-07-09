import { useEditor } from "../useEditor";
import { StringField, TextareaField, SectionHeader, Card, AddButton, ListControls, SaveBar } from "../FormFields";

interface ResourceLink { title: string; url: string; description: string }
interface Category { name: string; description: string; links: ResourceLink[] }
interface ResourcesData {
  hero: { eyebrow: string; title: string; lede: string };
  categories: Category[];
}

const updateAt = <T,>(arr: T[], i: number, val: T) => arr.map((x, idx) => (idx === i ? val : x));
const removeAt = <T,>(arr: T[], i: number) => arr.filter((_, idx) => idx !== i);
function moveUp<T>(arr: T[], i: number) { if (i === 0) return arr; const a = [...arr]; [a[i-1], a[i]] = [a[i], a[i-1]]; return a; }
function moveDown<T>(arr: T[], i: number) { if (i === arr.length - 1) return arr; const a = [...arr]; [a[i], a[i+1]] = [a[i+1], a[i]]; return a; }

export function ResourcesEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor<ResourcesData>("resources");

  if (loading) return <div style={info}>Loading…</div>;
  if (loadError) return <div style={errStyle}>Error: {loadError}</div>;
  if (!data) return null;

  const set = <K extends keyof ResourcesData>(key: K, val: ResourcesData[K]) => setData((d) => ({ ...d, [key]: val }));
  const updCat = (i: number, cat: Category) => set("categories", updateAt(data.categories, i, cat));

  return (
    <div style={layout}>
      <SectionHeader title="Hero" />
      <Card>
        <StringField label="Eyebrow" value={data.hero.eyebrow} onChange={(v) => set("hero", { ...data.hero, eyebrow: v })} />
        <StringField label="Title" value={data.hero.title} onChange={(v) => set("hero", { ...data.hero, title: v })} />
        <TextareaField label="Lede" value={data.hero.lede} rows={2} onChange={(v) => set("hero", { ...data.hero, lede: v })} />
      </Card>

      <SectionHeader title="Categories & Links" description="Each category groups related learning resources." />

      {data.categories.map((cat, i) => (
        <Card key={i}>
          <ListControls
            index={i} total={data.categories.length}
            onMoveUp={() => set("categories", moveUp(data.categories, i))}
            onMoveDown={() => set("categories", moveDown(data.categories, i))}
            onDelete={() => set("categories", removeAt(data.categories, i))}
          />
          <div style={grid2}>
            <StringField label="Category name" value={cat.name} onChange={(v) => updCat(i, { ...cat, name: v })} />
            <TextareaField label="Description" value={cat.description ?? ""} rows={1}
              onChange={(v) => updCat(i, { ...cat, description: v })} />
          </div>

          <div style={subSection}>
            <div style={subLabel}>Links in this category</div>
            {cat.links.map((lk, li) => (
              <Card key={li} style={{ background: "#0f172a", padding: "12px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <ListControls
                    index={li} total={cat.links.length}
                    onMoveUp={() => updCat(i, { ...cat, links: moveUp(cat.links, li) })}
                    onMoveDown={() => updCat(i, { ...cat, links: moveDown(cat.links, li) })}
                    onDelete={() => updCat(i, { ...cat, links: removeAt(cat.links, li) })}
                  />
                </div>
                <StringField label="Title" value={lk.title} onChange={(v) => updCat(i, { ...cat, links: updateAt(cat.links, li, { ...lk, title: v }) })} />
                <StringField
                  label="URL"
                  value={lk.url}
                  placeholder="https://codeforces.com or /training"
                  onChange={(v) => updCat(i, { ...cat, links: updateAt(cat.links, li, { ...lk, url: v }) })}
                  mono
                />
                <TextareaField label="Description" value={lk.description ?? ""} rows={2}
                  onChange={(v) => updCat(i, { ...cat, links: updateAt(cat.links, li, { ...lk, description: v }) })} />
              </Card>
            ))}
            <AddButton label="Add link" onClick={() => updCat(i, { ...cat, links: [...cat.links, { title: "", url: "", description: "" }] })} />
          </div>
        </Card>
      ))}

      <AddButton label="Add category" onClick={() => set("categories", [...data.categories, { name: "", description: "", links: [] }])} />
      <SaveBar status={saveStatus} error={saveError ?? undefined} onSave={save} dirty={dirty} />
    </div>
  );
}

const layout: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const subSection: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 8, paddingTop: 12, borderTop: "1px solid rgba(51,65,85,0.3)" };
const subLabel: React.CSSProperties = { fontSize: 11, color: "#475569", textTransform: "uppercase" as const, letterSpacing: "0.06em" };
const info: React.CSSProperties = { color: "#64748b", padding: 40, textAlign: "center" };
const errStyle: React.CSSProperties = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
