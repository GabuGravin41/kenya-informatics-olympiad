import { useEditor } from "../useEditor";
import { StringField, TextareaField, BoolField, SectionHeader, Card, AddButton, ListControls, SaveBar } from "../FormFields";

interface NewsEvent {
  date: string; tag: string; title: string; body: string; primary: boolean;
}
interface NewsData { events: NewsEvent[] }

const blank = (): NewsEvent => ({ date: "", tag: "", title: "", body: "", primary: false });
const updateAt = <T,>(arr: T[], i: number, val: T) => arr.map((x, idx) => (idx === i ? val : x));
const removeAt = <T,>(arr: T[], i: number) => arr.filter((_, idx) => idx !== i);
function moveUp<T>(arr: T[], i: number) { if (i === 0) return arr; const a = [...arr]; [a[i-1], a[i]] = [a[i], a[i-1]]; return a; }
function moveDown<T>(arr: T[], i: number) { if (i === arr.length - 1) return arr; const a = [...arr]; [a[i], a[i+1]] = [a[i+1], a[i]]; return a; }

export function NewsEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor<NewsData>("news");

  if (loading) return <div style={info}>Loading…</div>;
  if (loadError) return <div style={errStyle}>Error: {loadError}</div>;
  if (!data) return null;

  const upd = (events: NewsEvent[]) => setData(() => ({ events }));

  return (
    <div style={layout}>
      <SectionHeader title="Upcoming Events" description="Shown on the /news calendar page. Add events in chronological order (nearest first)." />

      {data.events.map((ev, i) => (
        <Card key={i} style={ev.primary ? { borderColor: "rgba(56,189,248,0.4)", background: "rgba(56,189,248,0.04)" } : undefined}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <ListControls
              index={i} total={data.events.length}
              onMoveUp={() => upd(moveUp(data.events, i))}
              onMoveDown={() => upd(moveDown(data.events, i))}
              onDelete={() => upd(removeAt(data.events, i))}
            />
            <BoolField
              label="Highlight as primary event"
              value={ev.primary}
              onChange={(v) => upd(updateAt(data.events, i, { ...ev, primary: v }))}
            />
          </div>
          <div style={grid2}>
            <StringField
              label="Date"
              value={ev.date}
              onChange={(v) => upd(updateAt(data.events, i, { ...ev, date: v }))}
              placeholder="15 Mar 2026 or 08–14 Jul 2026"
            />
            <StringField
              label="Tag"
              value={ev.tag}
              onChange={(v) => upd(updateAt(data.events, i, { ...ev, tag: v }))}
              placeholder="Round 01 / Camp / Premier"
            />
          </div>
          <StringField label="Title" value={ev.title} onChange={(v) => upd(updateAt(data.events, i, { ...ev, title: v }))} />
          <TextareaField label="Body" value={ev.body} rows={2} onChange={(v) => upd(updateAt(data.events, i, { ...ev, body: v }))} />
        </Card>
      ))}

      <AddButton label="Add event" onClick={() => upd([...data.events, blank()])} />

      <SaveBar status={saveStatus} error={saveError ?? undefined} onSave={save} dirty={dirty} />
    </div>
  );
}

const layout: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const info: React.CSSProperties = { color: "#64748b", padding: 40, textAlign: "center" };
const errStyle: React.CSSProperties = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
