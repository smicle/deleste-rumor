$list = ls -Name $args
foreach ($l in $list) {
  mv "$l" $($l.split("_")[1])
}
