Warum gibts hier einen wp-Ordner?
Das ist historisch so gewachsen ;) Früher gabs eine Wordpress-Homepage, die hat sich hinter dem einem /wp Endpunkt versteckt.
Da es aber trotzdem noch Dienste gibt, die sich auf den /wp-Endpunkt beziehen, wurde der hier übernommen.

Außerdem verringert sich so das Risiko erheblich, mit den URLs mit dem Reverse-Proxy in Konflikt zu kommen,
wenn wir alle URLs der Webseite (außer der Startseite) hinter /wp/ verstecken.

Warum liefert /wp die Startseite aus?
Das geofs-display holt sich die Tabelle der Präsenzzeiten von diesem Endpunkt.