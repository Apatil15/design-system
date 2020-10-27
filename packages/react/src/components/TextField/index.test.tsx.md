# Snapshot report for `packages/react/src/components/TextField/index.test.tsx`

The actual snapshot is saved in `index.test.tsx.snap`.

Generated by [AVA](https://avajs.dev).

## a custom baseName results in new BEM classes

> Snapshot 1

    <div
      className="foo"
    >
      <label
        className="foo__label"
        htmlFor="textfield3"
      >
        Text field
      </label>
      <input
        'aria-describedby'={undefined}
        'aria-errormessage'={undefined}
        'aria-invalid'={undefined}
        className="foo__input"
        id="textfield3"
        onChange={Function changeListener {}}
        required={true}
        type="text"
        value=""
      />
      <div
        "aria-live"="polite"
        "aria-relevant"="all"
        className="foo__feedback"
      />
    </div>

## renders its defaults

> Snapshot 1

    <div
      className="textfield"
    >
      <label
        className="textfield__label"
        htmlFor="textfield1"
      >
        Text field
      </label>
      <input
        'aria-describedby'={undefined}
        'aria-errormessage'={undefined}
        'aria-invalid'={undefined}
        className="textfield__input"
        id="textfield1"
        onChange={Function changeListener {}}
        required={true}
        type="text"
        value=""
      />
      <div
        "aria-live"="polite"
        "aria-relevant"="all"
        className="textfield__feedback"
      />
    </div>

## required fields do not contain the optional string in their label

> Snapshot 1

    <div
      className="textfield"
    >
      <label
        className="textfield__label"
        htmlFor="textfield2"
      >
        Required text field
      </label>
      <input
        'aria-describedby'={undefined}
        'aria-errormessage'={undefined}
        'aria-invalid'={undefined}
        className="textfield__input"
        id="textfield2"
        onChange={Function changeListener {}}
        required={true}
        type="text"
        value=""
      />
      <div
        "aria-live"="polite"
        "aria-relevant"="all"
        className="textfield__feedback"
      />
    </div>